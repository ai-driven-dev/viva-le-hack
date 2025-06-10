"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// UI components
import Transcript from "./components/Transcript";

// Types
import { SessionStatus, TranscriptItem } from "@/app/types";
import type { RealtimeAgent } from "@openai/agents/realtime";

// Context providers & hooks
import { useEvent } from "@/app/contexts/EventContext";
import { useTranscript } from "@/app/contexts/TranscriptContext";

// Utilities
import { RealtimeClient } from "@/app/agentConfigs/realtimeClient";

// Agent configs
// New SDK scenarios
import { orchestratorScenario } from "@/app/agentConfigs/orchestrator";

// Chat storage
import { chatStorage } from "@/app/lib/chatStorage";

const sdkScenarioMap: Record<string, RealtimeAgent[]> = {
  main: orchestratorScenario,
};


function App() {
  const searchParams = useSearchParams()!;

  const {
    transcriptItems,
    addTranscriptMessage,
    addTranscriptBreadcrumb,
    updateTranscriptMessage,
    updateTranscriptItem,
  } = useTranscript();

  // Keep a mutable reference to the latest transcriptItems so that streaming
  // callbacks registered once during setup always have access to up-to-date
  // data without being re-registered on every render.
  const transcriptItemsRef = useRef<TranscriptItem[]>(transcriptItems);
  useEffect(() => {
    transcriptItemsRef.current = transcriptItems;
  }, [transcriptItems]);
  const { logClientEvent, logServerEvent, logHistoryItem } = useEvent();

  const [selectedAgentName, setSelectedAgentName] = useState<string>("");
  const [selectedAgentConfigSet, setSelectedAgentConfigSet] = useState<
    RealtimeAgent[] | null
  >(null);

  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  const sdkAudioElement = React.useMemo(() => {
    if (typeof window === "undefined") return undefined;
    const el = document.createElement("audio");
    el.autoplay = true;
    el.style.display = "none";
    document.body.appendChild(el);
    return el;
  }, []);

  // Attach SDK audio element once it exists (after first render in browser)
  useEffect(() => {
    if (sdkAudioElement && !audioElementRef.current) {
      audioElementRef.current = sdkAudioElement;
    }
  }, [sdkAudioElement]);

  const sdkClientRef = useRef<RealtimeClient | null>(null);
  const loggedFunctionCallsRef = useRef<Set<string>>(new Set());
  const [sessionStatus, setSessionStatus] =
    useState<SessionStatus>("DISCONNECTED");

  const [userText, setUserText] = useState<string>("");
  const [isPTTActive, setIsPTTActive] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("pushToTalkActive");
    return stored ? stored === "true" : false;
  });
  const [isPTTUserSpeaking, setIsPTTUserSpeaking] = useState<boolean>(false);
  const [isAudioPlaybackEnabled] = useState<boolean>(true);

  const sendClientEvent = (eventObj: any, eventNameSuffix = "") => {
    if (!sdkClientRef.current) {
      console.error("SDK client not available", eventObj);
      return;
    }

    try {
      logClientEvent(eventObj, eventNameSuffix);
      sdkClientRef.current.sendEvent(eventObj);
    } catch (err) {
      console.error("Failed to send via SDK", err);
    }
  };

  useEffect(() => {
    let finalAgentConfig = searchParams.get("agentConfig");
    if (!finalAgentConfig || !sdkScenarioMap[finalAgentConfig]) {
      finalAgentConfig = "main"; // Use main as default since it's our orchestrator
      const url = new URL(window.location.toString());
      url.searchParams.set("agentConfig", finalAgentConfig);
      window.location.replace(url.toString());
      return;
    }

    const agents = sdkScenarioMap[finalAgentConfig];
    const agentKeyToUse = agents[0]?.name || "";

    setSelectedAgentName(agentKeyToUse);
    setSelectedAgentConfigSet(agents);
  }, [searchParams]);

  useEffect(() => {
    if (selectedAgentName && sessionStatus === "DISCONNECTED") {
      connectToRealtime();
    }
  }, [selectedAgentName]);

  useEffect(() => {
    if (
      sessionStatus === "CONNECTED" &&
      selectedAgentConfigSet &&
      selectedAgentName
    ) {
      const currentAgent = selectedAgentConfigSet.find(
        (a) => a.name === selectedAgentName
      );
      addTranscriptBreadcrumb(`${selectedAgentName}`, currentAgent);
      updateSession(true);
    }
  }, [selectedAgentConfigSet, selectedAgentName, sessionStatus]);

  useEffect(() => {
    if (sessionStatus === "CONNECTED") {
      console.log(
        `updatingSession, isPTTACtive=${isPTTActive} sessionStatus=${sessionStatus}`
      );
      updateSession();
    }
  }, [isPTTActive]);

  // Save PTT preference to localStorage
  useEffect(() => {
    localStorage.setItem("pushToTalkActive", isPTTActive.toString());
  }, [isPTTActive]);

  const fetchEphemeralKey = async (): Promise<string | null> => {
    logClientEvent({ url: "/session" }, "fetch_session_token_request");
    const tokenResponse = await fetch("/api/session");
    const data = await tokenResponse.json();
    logServerEvent(data, "fetch_session_token_response");

    if (!data.client_secret?.value) {
      logClientEvent(data, "error.no_ephemeral_key");
      console.error("No ephemeral key provided by the server");
      setSessionStatus("DISCONNECTED");
      return null;
    }

    return data.client_secret.value;
  };

  const connectToRealtime = async () => {
    const agentSetKey = searchParams.get("agentConfig") || "default";

    // Check if it's in sdkScenarioMap (including our main orchestrator scenario)
    if (sdkScenarioMap[agentSetKey]) {
      // Use new SDK path
      if (sessionStatus !== "DISCONNECTED") return;
      setSessionStatus("CONNECTING");

      try {
        const EPHEMERAL_KEY = await fetchEphemeralKey();
        if (!EPHEMERAL_KEY) return;

        // Create a new conversation when starting a new session
        chatStorage.createNewConversation(selectedAgentName);

        // Ensure the selectedAgentName is first so that it becomes the root
        const reorderedAgents = [...sdkScenarioMap[agentSetKey]];
        const idx = reorderedAgents.findIndex(
          (a) => a.name === selectedAgentName
        );
        if (idx > 0) {
          const [agent] = reorderedAgents.splice(idx, 1);
          reorderedAgents.unshift(agent);
        }

        const client = new RealtimeClient({
          getEphemeralKey: async () => EPHEMERAL_KEY,
          initialAgents: reorderedAgents,
          audioElement: sdkAudioElement,
          extraContext: {
            addTranscriptBreadcrumb,
          },
        } as any);

        sdkClientRef.current = client;

        client.on("connection_change", (status) => {
          if (status === "connected") setSessionStatus("CONNECTED");
          else if (status === "connecting") setSessionStatus("CONNECTING");
          else setSessionStatus("DISCONNECTED");
        });

        client.on("message", (ev) => {
          logServerEvent(ev);

          try {
            // Guardrail trip event – mark last assistant message as FAIL
            if (ev.type === "guardrail_tripped") {
              const lastAssistant = [...transcriptItemsRef.current]
                .reverse()
                .find((i) => i.role === "assistant");

              if (lastAssistant) {
                updateTranscriptItem(lastAssistant.itemId, {
                  guardrailResult: {
                    status: "DONE",
                    category: "OFF_BRAND",
                    rationale: "Guardrail triggered",
                    testText: "",
                  },
                } as any);
              }
              return;
            }

            // Response finished – if we still have Pending guardrail mark as
            // Pass. This event fires once per assistant turn.
            if (ev.type === "response.done") {
              const lastAssistant = [...transcriptItemsRef.current]
                .reverse()
                .find((i) => i.role === "assistant");

              if (lastAssistant) {
                const existing: any = (lastAssistant as any).guardrailResult;
                if (!existing || existing.status === "IN_PROGRESS") {
                  updateTranscriptItem(lastAssistant.itemId, {
                    guardrailResult: {
                      status: "DONE",
                      category: "NONE",
                      rationale: "",
                    },
                  } as any);
                }
              }
              // continue processing other logic if needed
            }
            // Assistant text (or audio-to-text) streaming
            if (
              ev.type === "response.text.delta" ||
              ev.type === "response.audio_transcript.delta"
            ) {
              const itemId: string | undefined =
                (ev as any).item_id ?? (ev as any).itemId;
              const delta: string | undefined =
                (ev as any).delta ?? (ev as any).text;
              if (!itemId || !delta) return;

              // Ensure a transcript message exists for this assistant item.
              if (
                !transcriptItemsRef.current.some((t) => t.itemId === itemId)
              ) {
                addTranscriptMessage(itemId, "assistant", "");
                updateTranscriptItem(itemId, {
                  guardrailResult: {
                    status: "IN_PROGRESS",
                  },
                } as any);
              }

              // Append the latest delta so the UI streams.
              updateTranscriptMessage(itemId, delta, true);
              updateTranscriptItem(itemId, { status: "IN_PROGRESS" });
              return;
            }

            // Live user transcription streaming
            if (ev.type === "conversation.input_audio_transcription.delta") {
              const itemId: string | undefined =
                (ev as any).item_id ?? (ev as any).itemId;
              const delta: string | undefined =
                (ev as any).delta ?? (ev as any).text;
              if (!itemId || typeof delta !== "string") return;

              // If this is the very first chunk, create a hidden user message
              // so that we can surface "Transcribing…" immediately.
              if (
                !transcriptItemsRef.current.some((t) => t.itemId === itemId)
              ) {
                addTranscriptMessage(itemId, "user", "Transcribing…");
              }

              updateTranscriptMessage(itemId, delta, true);
              updateTranscriptItem(itemId, { status: "IN_PROGRESS" });
            }

            // Detect start of a new user speech segment when VAD kicks in.
            if (ev.type === "input_audio_buffer.speech_started") {
              const itemId: string | undefined = (ev as any).item_id;
              if (!itemId) return;

              const exists = transcriptItemsRef.current.some(
                (t) => t.itemId === itemId
              );
              if (!exists) {
                addTranscriptMessage(itemId, "user", "Transcribing…");
                updateTranscriptItem(itemId, { status: "IN_PROGRESS" });
              }
            }

            // Final transcript once Whisper finishes
            if (
              ev.type ===
              "conversation.item.input_audio_transcription.completed"
            ) {
              const itemId: string | undefined = (ev as any).item_id;
              const transcriptText: string | undefined = (ev as any).transcript;
              if (!itemId || typeof transcriptText !== "string") return;

              const exists = transcriptItemsRef.current.some(
                (t) => t.itemId === itemId
              );
              if (!exists) {
                addTranscriptMessage(itemId, "user", transcriptText.trim());
              } else {
                // Replace placeholder / delta text with final transcript
                updateTranscriptMessage(itemId, transcriptText.trim(), false);
              }
              updateTranscriptItem(itemId, { status: "DONE" });
            }

            // Assistant streaming tokens or transcript
            if (
              ev.type === "response.text.delta" ||
              ev.type === "response.audio_transcript.delta"
            ) {
              const responseId: string | undefined =
                (ev as any).response_id ?? (ev as any).responseId;
              const delta: string | undefined =
                (ev as any).delta ?? (ev as any).text;
              if (!responseId || typeof delta !== "string") return;

              // We'll use responseId as part of itemId to make it deterministic.
              const itemId = `assistant-${responseId}`;

              if (
                !transcriptItemsRef.current.some((t) => t.itemId === itemId)
              ) {
                addTranscriptMessage(itemId, "assistant", "");
              }

              updateTranscriptMessage(itemId, delta, true);
              updateTranscriptItem(itemId, { status: "IN_PROGRESS" });
            }
          } catch (err) {
            // Streaming is best-effort – never break the session because of it.
            console.warn("streaming-ui error", err);
          }
        });

        client.on("history_added", (item) => {
          logHistoryItem(item);

          // Update the transcript view
          if (item.type === "message") {
            const textContent = (item.content || [])
              .map((c: any) => {
                if (c.type === "text") return c.text;
                if (c.type === "input_text") return c.text;
                if (c.type === "input_audio") return c.transcript ?? "";
                if (c.type === "audio") return c.transcript ?? "";
                return "";
              })
              .join(" ")
              .trim();

            if (!textContent) return;

            const role = item.role as "user" | "assistant";

            // No PTT placeholder logic needed

            const exists = transcriptItemsRef.current.some(
              (t) => t.itemId === item.itemId
            );

            if (!exists) {
              addTranscriptMessage(item.itemId, role, textContent, false);
              if (role === "assistant") {
                updateTranscriptItem(item.itemId, {
                  guardrailResult: {
                    status: "IN_PROGRESS",
                  },
                } as any);
              }
            } else {
              updateTranscriptMessage(item.itemId, textContent, false);
            }

            // After assistant message completes, add default guardrail PASS if none present.
            if (role === "assistant" && (item as any).status === "completed") {
              const current = transcriptItemsRef.current.find(
                (t) => t.itemId === item.itemId
              );
              const existing = (current as any)?.guardrailResult;
              if (existing && existing.status !== "IN_PROGRESS") {
                // already final (e.g., FAIL) – leave as is.
              } else {
                updateTranscriptItem(item.itemId, {
                  guardrailResult: {
                    status: "DONE",
                    category: "NONE",
                    rationale: "",
                  },
                } as any);
              }
            }

            if ("status" in item) {
              updateTranscriptItem(item.itemId, {
                status:
                  (item as any).status === "completed" ? "DONE" : "IN_PROGRESS",
              });
            }
          }

          // Surface function / hand-off calls as breadcrumbs
          const title = `${(item as any).name}`;

          if (!loggedFunctionCallsRef.current.has(item.itemId)) {
            addTranscriptBreadcrumb(title, {
              arguments: (item as any).arguments,
            });
            loggedFunctionCallsRef.current.add(item.itemId);
          }
        });

        // Handle continuous updates for existing items so streaming assistant
        // speech shows up while in_progress.
        client.on("history_updated", (history) => {
          history.forEach((item: any) => {
            if (item.type === "function_call") {
              // Update breadcrumb data (e.g., add output) once we have more info.

              if (!loggedFunctionCallsRef.current.has(item.itemId)) {
                addTranscriptBreadcrumb(`Tool call: ${(item as any).name}`, {
                  arguments: (item as any).arguments,
                  output: (item as any).output,
                });
                loggedFunctionCallsRef.current.add(item.itemId);
              }

              return;
            }

            if (item.type !== "message") return;

            const textContent = (item.content || [])
              .map((c: any) => {
                if (c.type === "text") return c.text;
                if (c.type === "input_text") return c.text;
                if (c.type === "input_audio") return c.transcript ?? "";
                if (c.type === "audio") return c.transcript ?? "";
                return "";
              })
              .join(" ")
              .trim();

            const role = item.role as "user" | "assistant";

            if (!textContent) return;

            const exists = transcriptItemsRef.current.some(
              (t) => t.itemId === item.itemId
            );
            if (!exists) {
              addTranscriptMessage(item.itemId, role, textContent, false);
              if (role === "assistant") {
                updateTranscriptItem(item.itemId, {
                  guardrailResult: {
                    status: "IN_PROGRESS",
                  },
                } as any);
              }
            } else {
              updateTranscriptMessage(item.itemId, textContent, false);
            }

            if ("status" in item) {
              updateTranscriptItem(item.itemId, {
                status:
                  (item as any).status === "completed" ? "DONE" : "IN_PROGRESS",
              });
            }
          });
        });

        await client.connect();
      } catch (err) {
        console.error("Error connecting via SDK:", err);
        setSessionStatus("DISCONNECTED");
      }
      return;
    }
  };



  const sendSimulatedUserMessage = (text: string) => {
    const id = uuidv4().slice(0, 32);
    addTranscriptMessage(id, "user", text, true);

    sendClientEvent(
      {
        type: "conversation.item.create",
        item: {
          id,
          type: "message",
          role: "user",
          content: [{ type: "input_text", text }],
        },
      },
      "(simulated user text message)"
    );
    sendClientEvent(
      { type: "response.create" },
      "(trigger response after simulated user text message)"
    );
  };

  const updateSession = (shouldTriggerResponse: boolean = false) => {
    // In SDK scenarios RealtimeClient manages session config automatically.
    if (sdkClientRef.current) {
      if (shouldTriggerResponse) {
        sendSimulatedUserMessage("hi");
      }

      // Reflect Push-to-Talk UI state by (de)activating server VAD on the
      // backend. The Realtime SDK supports live session updates via the
      // `session.update` event.
      const client = sdkClientRef.current;
      if (client) {
        const turnDetection = isPTTActive
          ? null
          : {
              type: "server_vad",
              threshold: 0.9,
              prefix_padding_ms: 300,
              silence_duration_ms: 500,
              create_response: true,
            };
        try {
          client.sendEvent({
            type: "session.update",
            session: {
              turn_detection: turnDetection,
            },
          });
        } catch (err) {
          console.warn("Failed to update session", err);
        }
      }
      return;
    }
  };

  const cancelAssistantSpeech = async () => {
    // Interrupts server response and clears local audio.
    if (sdkClientRef.current) {
      try {
        sdkClientRef.current.interrupt();
      } catch (err) {
        console.error("Failed to interrupt", err);
      }
    }
  };

  const handleSendTextMessage = () => {
    if (!userText.trim()) return;
    cancelAssistantSpeech();

    if (!sdkClientRef.current) {
      console.error("SDK client not available");
      return;
    }

    try {
      sdkClientRef.current.sendUserText(userText.trim());
    } catch (err) {
      console.error("Failed to send via SDK", err);
    }

    setUserText("");
  };

  const handleTalkButtonDown = () => {
    if (sessionStatus !== "CONNECTED" || sdkClientRef.current == null) return;
    cancelAssistantSpeech();

    setIsPTTUserSpeaking(true);
    sendClientEvent({ type: "input_audio_buffer.clear" }, "clear PTT buffer");

    // No placeholder; we'll rely on server transcript once ready.
  };

  const handleTalkButtonUp = () => {
    if (
      sessionStatus !== "CONNECTED" ||
      sdkClientRef.current == null ||
      !isPTTUserSpeaking
    )
      return;

    setIsPTTUserSpeaking(false);
    sendClientEvent({ type: "input_audio_buffer.commit" }, "commit PTT");
    sendClientEvent({ type: "response.create" }, "trigger response PTT");
  };

  useEffect(() => {
    if (audioElementRef.current) {
      if (isAudioPlaybackEnabled) {
        audioElementRef.current.muted = false;
        audioElementRef.current.play().catch((err) => {
          console.warn("Autoplay may be blocked by browser:", err);
        });
      } else {
        // Mute and pause to avoid brief audio blips before pause takes effect.
        audioElementRef.current.muted = true;
        audioElementRef.current.pause();
      }
    }

    // Toggle server-side audio stream mute so bandwidth is saved when the
    // user disables playback. Only supported when using the SDK path.
    if (sdkClientRef.current) {
      try {
        sdkClientRef.current.mute(!isAudioPlaybackEnabled);
      } catch (err) {
        console.warn("Failed to toggle SDK mute", err);
      }
    }
  }, [isAudioPlaybackEnabled]);

  // Ensure mute state is propagated to transport right after we connect or
  // whenever the SDK client reference becomes available.
  useEffect(() => {
    if (sessionStatus === "CONNECTED" && sdkClientRef.current) {
      try {
        sdkClientRef.current.mute(!isAudioPlaybackEnabled);
      } catch (err) {
        console.warn("mute sync after connect failed", err);
      }
    }
  }, [sessionStatus, isAudioPlaybackEnabled]);



  return (
    <div className="min-h-screen bg-[#4299e1] bg-[url('/images/gradient-background.jpg')] bg-cover bg-center bg-no-repeat flex flex-col">
      {/* Logo */}
      <div className="w-full flex justify-center items-center pt-8">
        <img src="/images/logo.png" alt="Logo" className="h-24 w-auto" />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4">
        <Transcript
          userText={userText}
          setUserText={setUserText}
          onSendMessage={handleSendTextMessage}
          canSend={sessionStatus === "CONNECTED" && sdkClientRef.current != null}
          sessionStatus={sessionStatus}
          isPTTActive={isPTTActive}
          setIsPTTActive={setIsPTTActive}
          isPTTUserSpeaking={isPTTUserSpeaking}
          handleTalkButtonDown={handleTalkButtonDown}
          handleTalkButtonUp={handleTalkButtonUp}
        />
      </div>
    </div>
  );
}

export default App;
