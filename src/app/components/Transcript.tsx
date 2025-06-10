"use-client";

import { useTranscript } from "@/app/contexts/TranscriptContext";
import { SessionStatus, TranscriptItem } from "@/app/types";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

export interface TranscriptProps {
  userText: string;
  setUserText: (val: string) => void;
  onSendMessage: () => void;
  canSend: boolean;
  sessionStatus: SessionStatus;
  isPTTActive: boolean;
  setIsPTTActive: (active: boolean) => void;
  isPTTUserSpeaking: boolean;
  handleTalkButtonDown: () => void;
  handleTalkButtonUp: () => void;
}

function Transcript({
  userText,
  setUserText,
  onSendMessage,
  canSend,
  sessionStatus,
  isPTTActive,
  setIsPTTActive,
  isPTTUserSpeaking,
  handleTalkButtonDown,
  handleTalkButtonUp,
}: TranscriptProps) {
  const { transcriptItems } = useTranscript();
  const transcriptRef = useRef<HTMLDivElement | null>(null);
  const [prevLogs, setPrevLogs] = useState<TranscriptItem[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function scrollToBottom() {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }

  useEffect(() => {
    const hasNewMessage = transcriptItems.length > prevLogs.length;
    const hasUpdatedMessage = transcriptItems.some((newItem, index) => {
      const oldItem = prevLogs[index];
      return (
        oldItem &&
        (newItem.title !== oldItem.title || newItem.data !== oldItem.data)
      );
    });

    if (hasNewMessage || hasUpdatedMessage) {
      scrollToBottom();
    }

    setPrevLogs(transcriptItems);
  }, [transcriptItems]);

  // Autofocus on text box input on load
  useEffect(() => {
    if (canSend && inputRef.current) {
      inputRef.current.focus();
    }
  }, [canSend]);

  // Filter to show only MESSAGE type items (no breadcrumbs)
  const messageItems = transcriptItems
    .filter((item) => item.type === "MESSAGE" && !item.isHidden)
    .sort((a, b) => a.createdAtMs - b.createdAtMs);

  const getStatusColor = () => {
    switch (sessionStatus) {
      case "CONNECTED":
        return "bg-green-500";
      case "CONNECTING":
        return "bg-yellow-500 animate-pulse";
      default:
        return "bg-red-500";
    }
  };

  const getStatusText = () => {
    switch (sessionStatus) {
      case "CONNECTED":
        return "Connected";
      case "CONNECTING":
        return "Connecting...";
      default:
        return "Disconnected";
    }
  };

  return (
    <div className="flex flex-col h-full max-w-md mx-auto w-full">
      {/* Status indicator */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center gap-4">
          {/* Connection Status */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
            <div className={`w-2 h-2 rounded-full ${getStatusColor()}`} />
            <span className="text-white text-sm font-medium">
              {getStatusText()}
            </span>
          </div>

          {/* Push-to-Talk Toggle */}
          <button
            onClick={() => setIsPTTActive(!isPTTActive)}
            className={`px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-200 ${isPTTActive
              ? "bg-white/30 border-white/50 text-white"
              : "bg-white/10 border-white/20 text-white/70"
              }`}
          >
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
                  fill="currentColor"
                />
                <path
                  d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-medium">
                {isPTTActive ? "PTT" : "Auto"}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Transcript Messages */}
      <div className="flex-1 mb-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden">
        <div
          ref={transcriptRef}
          className="overflow-auto p-6 flex flex-col gap-4 h-full"
        >
          {messageItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-white/70 text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="currentColor" />
                  <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-lg font-medium mb-2">Ready to chat</p>
              <p className="text-sm">Start speaking or type a message</p>
            </div>
          ) : (
            messageItems.map((item) => {
              const { itemId, role, title = "" } = item;
              const isUser = role === "user";

              return (
                <div
                  key={itemId}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${isUser
                      ? "bg-white/20 backdrop-blur-sm border border-white/30 text-white ml-4"
                      : "bg-white/90 backdrop-blur-sm border border-white/20 text-gray-800 mr-4"
                      }`}
                  >
                    <div className="prose prose-sm max-w-none">
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-0 last:mb-0">{children}</p>,
                          ul: ({ children }) => <ul className="mb-0 pl-4">{children}</ul>,
                          ol: ({ children }) => <ol className="mb-0 pl-4">{children}</ol>,
                          li: ({ children }) => <li className="mb-1">{children}</li>,
                          code: ({ children }) => (
                            <code className={`px-1 py-0.5 rounded text-xs ${isUser ? "bg-white/20" : "bg-gray-200"
                              }`}>
                              {children}
                            </code>
                          ),
                          pre: ({ children }) => (
                            <pre className={`p-2 rounded-lg text-xs overflow-x-auto ${isUser ? "bg-white/20" : "bg-gray-100"
                              }`}>
                              {children}
                            </pre>
                          ),
                        }}
                      >
                        {title}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
        <div className="flex items-center gap-3">
          {/* Talk Button - Only visible in PTT mode */}
          {isPTTActive && (
            <button
              onMouseDown={handleTalkButtonDown}
              onMouseUp={handleTalkButtonUp}
              onTouchStart={handleTalkButtonDown}
              onTouchEnd={handleTalkButtonUp}
              disabled={sessionStatus !== "CONNECTED"}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${isPTTUserSpeaking
                ? "bg-red-500 scale-110 shadow-lg shadow-red-500/30"
                : sessionStatus === "CONNECTED"
                  ? "bg-white/20 hover:bg-white/30 border border-white/30"
                  : "bg-white/10 border border-white/20 opacity-50"
                } backdrop-blur-sm`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
                  fill="currentColor"
                />
                <path
                  d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Text Input */}
          <input
            ref={inputRef}
            type="text"
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && canSend && userText.trim()) {
                onSendMessage();
              }
            }}
            className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent"
            placeholder={
              isPTTActive
                ? "Type a message or hold to talk..."
                : "Type a message or just start speaking..."
            }
            disabled={!canSend}
          />

          {/* Send Button */}
          <button
            onClick={onSendMessage}
            disabled={!canSend || !userText.trim()}
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:hover:bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="m22 2-7 20-4-9-9-4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m22 2-11 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transcript;
