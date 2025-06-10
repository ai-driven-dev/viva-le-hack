import { RealtimeAgent, tool } from "@openai/agents/realtime";
import { chatStorage } from "../lib/chatStorage";

// Outil pour mettre à jour l'état de la conversation
const updateConversationState = tool({
  name: "update_conversation_state",
  description:
    "Met à jour l'état de la conversation avec un résumé, l'action principale et ferme la conversation",
  parameters: {
    type: "object",
    additionalProperties: false,
    properties: {
      summary: {
        type: "string",
        description: "Résumé de la conversation ou de la session",
      },
      mainAction: {
        type: "string",
        description: "Action principale définie pour la journée",
      },
      opened: {
        type: "boolean",
        description:
          "État d'ouverture de la conversation (true = ouverte, false = fermée)",
        default: false,
      },
    },
    required: ["summary", "mainAction"],
  },
  execute: async (input) => {
    const {
      summary,
      mainAction,
      opened = false,
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
            "Action du jour sauvegardée et conversation fermée avec succès !",
          summary,
          mainAction,
          conversationClosed: true,
        };
      } else {
        return {
          success: true,
          message: "Action du jour sauvegardée avec succès !",
          summary,
          mainAction,
          conversationClosed: false,
        };
      }
    } catch {
      return {
        success: false,
        message: "Erreur lors de la sauvegarde de l'action du jour.",
      };
    }
  },
});

export const alterEgoAgent = new RealtimeAgent({
  name: "alterEgo",
  voice: "sage",
  instructions: `Tu es l'Alter Ego - miroir créatif qui aide à définir l'action principale du jour.

RÔLE : Aider à définir UNE action claire et réalisable.

WORKFLOW :
1. **Vérifie l'action d'hier** (si contexte Memory Agent disponible) :
   - "Hier tu avais prévu : [action]. L'as-tu faite ?"
   - Écoute la réponse sans jugement
   - Si non faite : "Veux-tu la reporter ou définir une nouvelle action ?"

2. **Définition nouvelle action** :
   - "Quelle est ton action principale aujourd'hui ?"
   - Challenge gentiment : vague → "C'est quoi concrètement ?"
   - Trop ambitieux → "Comment la rendre réalisable ?"
   - Valide faisabilité : temps, obstacles, critères de réussite

3. **Clôture** :
   - Résume l'action définie
   - "Ça te va ?"
   - Si oui → update_conversation_state (opened: false)
   - Message final : "Action sauvegardée ! Session terminée. Vas-y !"

STYLE :
- Direct mais bienveillant
- Légèrement provocateur
- Pas de coaching, juste de la clarté
- UNE seule action, pas plusieurs

FERMETURE OBLIGATOIRE : Toujours fermer avec opened: false une fois l'action confirmée.`,
  handoffs: [],
  tools: [updateConversationState],
  handoffDescription:
    "Alter Ego créatif qui aide à définir et clarifier l'action principale du jour",
});

export const alterEgoScenario = [alterEgoAgent];
