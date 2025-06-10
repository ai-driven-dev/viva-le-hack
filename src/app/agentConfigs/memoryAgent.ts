import { RealtimeAgent, tool } from "@openai/agents/realtime";
import { chatStorage } from "../lib/chatStorage";

// Outil pour mettre à jour l'état de la conversation
const updateConversationState = tool({
  name: "update_conversation_state",
  description:
    "Met à jour le résumé de la conversation, l'action principale du jour et l'état d'ouverture",
  parameters: {
    type: "object",
    additionalProperties: false,
    properties: {
      summary: {
        type: "string",
        description: "Résumé de la conversation jusqu'à présent",
      },
      mainAction: {
        type: "string",
        description:
          "Action principale que l'utilisateur souhaite accomplir aujourd'hui",
      },
      opened: {
        type: "boolean",
        description:
          "État d'ouverture de la conversation (true = ouverte, false = fermée)",
        default: true,
      },
    },
    required: ["summary", "mainAction"],
  },
  execute: async (input) => {
    const {
      summary,
      mainAction,
      opened = true,
    } = input as {
      summary: string;
      mainAction: string;
      opened?: boolean;
    };

    try {
      chatStorage.updateConversationState(summary, mainAction, opened);

      if (opened === false) {
        return {
          success: true,
          message:
            "Conversation fermée avec succès. Résumé et action principale sauvegardés.",
          summary,
          mainAction,
        };
      } else {
        return {
          success: true,
          message: "État de la conversation mis à jour.",
          summary,
          mainAction,
        };
      }
    } catch {
      return {
        success: false,
        message: "Erreur lors de la mise à jour de l'état de la conversation.",
      };
    }
  },
});

// Outil pour récupérer les conversations précédentes
const getPreviousConversations = tool({
  name: "get_previous_conversations",
  description:
    "Récupère les conversations précédentes pour voir les actions passées",
  parameters: {
    type: "object",
    additionalProperties: false,
    properties: {
      limit: {
        type: "number",
        description: "Nombre de conversations à récupérer (par défaut 5)",
        default: 5,
      },
    },
    required: [],
  },
  execute: async (input) => {
    const { limit = 5 } = input as { limit?: number };

    try {
      if (typeof window === "undefined") {
        return {
          success: false,
          message: "Impossible d'accéder au stockage local côté serveur",
        };
      }

      const conversations = [];
      const keys = Object.keys(localStorage).filter((key) =>
        key.startsWith("conversation_")
      );

      // Trier par date de création (plus récent en premier)
      const sortedKeys = keys.sort((a, b) => {
        const convA = JSON.parse(localStorage.getItem(a) || "{}");
        const convB = JSON.parse(localStorage.getItem(b) || "{}");
        return (convB.startedAt || 0) - (convA.startedAt || 0);
      });

      // Prendre les N plus récentes (exclure la conversation actuelle)
      const currentId = chatStorage.getCurrentConversationId();
      for (const key of sortedKeys.slice(0, limit + 1)) {
        const conv = JSON.parse(localStorage.getItem(key) || "{}");
        if (conv.id !== currentId && conv.mainAction) {
          conversations.push({
            date: new Date(conv.startedAt).toLocaleDateString("fr-FR"),
            mainAction: conv.mainAction,
            summary: conv.summary,
            completed: conv.opened === false,
          });
        }
        if (conversations.length >= limit) break;
      }

      return {
        success: true,
        conversations,
        message: `${conversations.length} conversation(s) précédente(s) trouvée(s)`,
      };
    } catch {
      return {
        success: false,
        message: "Erreur lors de la récupération des conversations précédentes",
      };
    }
  },
});

export const memoryAgent = new RealtimeAgent({
  name: "memoryAgent",
  voice: "sage",
  instructions: `OBJECTIF : Récupérer l'historique et retourner les données à l'orchestrateur.

WORKFLOW :
1. get_previous_conversations (récupère historique)
2. Analyse dernière action d'hier et patterns
3. transfer_to_orchestrator avec résumé : "Historique récupéré : [X] actions trouvées. Dernière action : [action] du [date]. Statut : [complétée/non complétée]. Prêt pour Podcast Agent."

IMPORTANT :
- Ne parle PAS à l'utilisateur
- Retourne juste les données à l'orchestrateur
- Focus sur la dernière action d'hier`,
  handoffs: [], // On va importer l'orchestrateur après pour éviter les imports circulaires
  tools: [updateConversationState, getPreviousConversations],
  handoffDescription:
    "Agent fonctionnel qui récupère l'historique et les données de contexte",
});
