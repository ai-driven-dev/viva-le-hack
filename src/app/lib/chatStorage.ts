import { TranscriptItem } from "@/app/types";

interface Conversation {
  id: string;
  startedAt: number;
  agentName: string;
  messages: TranscriptItem[];
  summary?: string;
  mainAction?: string;
  opened: boolean;
}

export const chatStorage = {
  getCurrentConversationId(): string {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("current_conversation_id") || "";
  },

  createNewConversation(agentName: string): string {
    if (typeof window === "undefined") return "";

    const conversationId = `conv_${Date.now()}`;
    localStorage.setItem("current_conversation_id", conversationId);

    const conversation: Conversation = {
      id: conversationId,
      startedAt: Date.now(),
      agentName,
      messages: [],
      opened: true,
    };

    localStorage.setItem(
      `conversation_${conversationId}`,
      JSON.stringify(conversation)
    );
    return conversationId;
  },

  saveMessage(message: TranscriptItem) {
    if (typeof window === "undefined") return;

    // Only store transcribed messages (completed messages with actual content)
    if (
      message.status !== "DONE" ||
      !message.title ||
      message.title.trim() === "" ||
      message.title === "Transcribing…"
    ) {
      return;
    }

    const conversationId = this.getCurrentConversationId();
    if (!conversationId) return;

    const key = `conversation_${conversationId}`;
    const existing = localStorage.getItem(key);

    if (existing) {
      const conversation: Conversation = JSON.parse(existing);

      // Check for duplicates by itemId
      const existingMessage = conversation.messages.find(
        (m) => m.itemId === message.itemId
      );
      if (existingMessage) {
        // Update existing message instead of adding duplicate
        const index = conversation.messages.findIndex(
          (m) => m.itemId === message.itemId
        );
        conversation.messages[index] = message;
      } else {
        // Add new message
        conversation.messages.push(message);
      }

      localStorage.setItem(key, JSON.stringify(conversation));
    }
  },

  saveMessages(messages: TranscriptItem[]) {
    messages.forEach((message) => this.saveMessage(message));
  },

  updateConversationState(
    summary?: string,
    mainAction?: string,
    opened?: boolean
  ) {
    if (typeof window === "undefined") return;

    const conversationId = this.getCurrentConversationId();
    if (!conversationId) return;

    const key = `conversation_${conversationId}`;
    const existing = localStorage.getItem(key);

    if (existing) {
      const conversation: Conversation = JSON.parse(existing);

      if (summary !== undefined) conversation.summary = summary;
      if (mainAction !== undefined) conversation.mainAction = mainAction;
      if (opened !== undefined) conversation.opened = opened;

      localStorage.setItem(key, JSON.stringify(conversation));
    }
  },

  getCurrentConversation(): Conversation | null {
    if (typeof window === "undefined") return null;

    const conversationId = this.getCurrentConversationId();
    if (!conversationId) return null;

    const key = `conversation_${conversationId}`;
    const existing = localStorage.getItem(key);

    return existing ? JSON.parse(existing) : null;
  },
};
