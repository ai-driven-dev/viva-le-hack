"use client";

import { chatStorage } from "@/app/lib/chatStorage";
import { TranscriptItem } from "@/app/types";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

type TranscriptContextValue = {
  transcriptItems: TranscriptItem[];
  addTranscriptMessage: (
    itemId: string,
    role: "user" | "assistant",
    text: string,
    hidden?: boolean
  ) => void;
  updateTranscriptMessage: (
    itemId: string,
    text: string,
    isDelta: boolean
  ) => void;
  addTranscriptBreadcrumb: (title: string, data?: Record<string, any>) => void;
  toggleTranscriptItemExpand: (itemId: string) => void;
  updateTranscriptItem: (
    itemId: string,
    updatedProperties: Partial<TranscriptItem>
  ) => void;
};

const TranscriptContext = createContext<TranscriptContextValue | undefined>(
  undefined
);

export const TranscriptProvider: FC<PropsWithChildren> = ({ children }) => {
  const [transcriptItems, setTranscriptItems] = useState<TranscriptItem[]>([]);

  function newTimestampPretty(): string {
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const ms = now.getMilliseconds().toString().padStart(3, "0");
    return `${time}.${ms}`;
  }

  const addTranscriptMessage: TranscriptContextValue["addTranscriptMessage"] = (
    itemId,
    role,
    text = "",
    isHidden = false
  ) => {
    setTranscriptItems((prev) => {
      if (prev.some((log) => log.itemId === itemId && log.type === "MESSAGE")) {
        console.warn(
          `[addTranscriptMessage] skipping; message already exists for itemId=${itemId}, role=${role}, text=${text}`
        );
        return prev;
      }

      const newItem: TranscriptItem = {
        itemId,
        type: "MESSAGE",
        role,
        title: text,
        expanded: false,
        timestamp: newTimestampPretty(),
        createdAtMs: Date.now(),
        status: "IN_PROGRESS",
        isHidden,
      };

      // Don't save to localStorage here - wait until message is completed

      return [...prev, newItem];
    });
  };

  const updateTranscriptMessage: TranscriptContextValue["updateTranscriptMessage"] =
    (itemId, newText, append = false) => {
      setTranscriptItems((prev) =>
        prev.map((item) => {
          if (item.itemId === itemId && item.type === "MESSAGE") {
            const updatedItem = {
              ...item,
              title: append ? (item.title ?? "") + newText : newText,
            };

            // Save to localStorage if this is a non-delta update (final message) and has content
            if (
              !append &&
              newText &&
              newText.trim() !== "" &&
              newText !== "Transcribing…"
            ) {
              // Set status to DONE for final messages and save
              const finalItem = { ...updatedItem, status: "DONE" as const };
              chatStorage.saveMessage(finalItem);
              return finalItem;
            }

            return updatedItem;
          }
          return item;
        })
      );
    };

  const addTranscriptBreadcrumb: TranscriptContextValue["addTranscriptBreadcrumb"] =
    (title, data) => {
      const newItem: TranscriptItem = {
        itemId: `breadcrumb-${uuidv4()}`,
        type: "BREADCRUMB",
        title,
        data,
        expanded: false,
        timestamp: newTimestampPretty(),
        createdAtMs: Date.now(),
        status: "DONE",
        isHidden: false,
      };

      // Save breadcrumb to localStorage immediately since it's already complete
      chatStorage.saveMessage(newItem);

      setTranscriptItems((prev) => [...prev, newItem]);
    };

  const toggleTranscriptItemExpand: TranscriptContextValue["toggleTranscriptItemExpand"] =
    (itemId) => {
      setTranscriptItems((prev) =>
        prev.map((log) =>
          log.itemId === itemId ? { ...log, expanded: !log.expanded } : log
        )
      );
    };

  const updateTranscriptItem: TranscriptContextValue["updateTranscriptItem"] = (
    itemId,
    updatedProperties
  ) => {
    setTranscriptItems((prev) =>
      prev.map((item) => {
        if (item.itemId === itemId) {
          const updatedItem = { ...item, ...updatedProperties };

          // Save to localStorage when message is completed
          if (updatedItem.status === "DONE" && updatedItem.type === "MESSAGE") {
            chatStorage.saveMessage(updatedItem);
          }

          return updatedItem;
        }
        return item;
      })
    );
  };

  return (
    <TranscriptContext.Provider
      value={{
        transcriptItems,
        addTranscriptMessage,
        updateTranscriptMessage,
        addTranscriptBreadcrumb,
        toggleTranscriptItemExpand,
        updateTranscriptItem,
      }}
    >
      {children}
    </TranscriptContext.Provider>
  );
};

export const useTranscript = (): TranscriptContextValue => {
  const context = useContext(TranscriptContext);
  if (!context) {
    throw new Error("useTranscript must be used within a TranscriptProvider");
  }
  return context;
};
