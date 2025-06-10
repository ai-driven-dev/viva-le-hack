import { RealtimeAgent, tool } from "@openai/agents/realtime";
import { alterEgoAgent } from "./alterEgo";
import { healthAgent } from "./healthAgent";
import { memoryAgent } from "./memoryAgent";
import {
  configureSoftMorningPodcastHandoffs,
  softMorningPodcastAgent,
} from "./softMorningPodcast";

// Outils pour récupérer météo et news
const getDateTime = tool({
  name: "get_datetime",
  description: "Récupère la date et l'heure actuelles",
  parameters: {
    type: "object",
    properties: {},
    required: [],
    additionalProperties: false,
  },
  execute: async () => {
    const now = new Date();
    return {
      success: true,
      datetime: now.toISOString(),
      date: now.toLocaleDateString("fr-FR"),
      time: now.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      dayOfWeek: now.toLocaleDateString("fr-FR", { weekday: "long" }),
    };
  },
});

const getWeather = tool({
  name: "get_weather",
  description: "Récupère les conditions météorologiques actuelles",
  parameters: {
    type: "object",
    properties: {
      location: {
        type: "string",
        description: "Lieu pour la météo (ex: Paris, New York)",
      },
      unit: {
        type: "string",
        description: "Unité de température",
        enum: ["celsius", "fahrenheit"],
      },
    },
    required: ["location"],
    additionalProperties: false,
  },
  execute: async (input) => {
    try {
      const { location, unit = "celsius" } = input as {
        location: string;
        unit?: string;
      };

      const response = await fetch(
        `/api/weather?location=${encodeURIComponent(location)}&unit=${unit}`
      );

      if (!response.ok) {
        return {
          success: false,
          error: "Météo indisponible",
        };
      }

      const data = (await response.json()) as any;
      return {
        success: true,
        location: data.location,
        temperature: data.temperature,
        unit: data.unit,
      };
    } catch {
      return {
        success: false,
        error: "Service météo indisponible",
      };
    }
  },
});

const searchGoodNews = tool({
  name: "search_good_news",
  description: "Recherche des nouvelles positives récentes",
  parameters: {
    type: "object",
    properties: {
      city: {
        type: "string",
        description:
          "Ville pour chercher des nouvelles locales (ex: Paris, London)",
      },
    },
    required: [],
    additionalProperties: false,
  },
  execute: async (input) => {
    try {
      const { city = "world" } = input as { city?: string };
      const response = await fetch(
        `/api/news?city=${encodeURIComponent(city)}`
      );

      if (!response.ok) {
        return {
          success: false,
          error: "Actualités indisponibles",
        };
      }

      const data = (await response.json()) as any;
      return {
        success: true,
        city: data.city,
        news: data.news,
      };
    } catch {
      return {
        success: false,
        error: "Service d'actualités indisponible",
      };
    }
  },
});

export const orchestratorAgent = new RealtimeAgent({
  name: "orchestrator",
  voice: "sage",
  instructions: `Tu es l'orchestrateur. Tu collectes TOUTES les données puis les transmets aux agents.

WORKFLOW "hi" :
1. transfer_to_healthAgent (récupère données santé)
2. Quand Health Agent revient → transfer_to_memoryAgent (récupère historique)
3. Quand Memory Agent revient → Récupère date/heure, météo et news via tes outils
4. transfer_to_softMorningPodcastAgent avec CONTEXTE COMPLET : "Voici TOUTES les données : [date/heure] + [santé] + [historique] + [météo] + [news]. Raconte le podcast à l'utilisateur avec ces infos."
5. Quand Podcast Agent revient → transfer_to_alterEgo avec contexte ultra-enrichi

WORKFLOW "podcast" :
- Récupère date/heure, météo et news → transfer_to_softMorningPodcastAgent → retour

RÔLE CLÉS :
- Collecte TOUTES les données (date/heure, santé, mémoire, météo, news)
- Transmet le contexte complet aux agents
- Le Podcast Agent n'appelle AUCUN outil, il utilise les données transmises
- Coordonne efficacement sans conversation longue`,
  handoffs: [healthAgent, memoryAgent, alterEgoAgent, softMorningPodcastAgent],
  tools: [getDateTime, getWeather, searchGoodNews],
  handoffDescription:
    "Orchestrateur principal qui collecte toutes les données et coordonne le workflow",
});

// Configure les handoffs après l'initialisation de tous les agents
configureSoftMorningPodcastHandoffs(orchestratorAgent);

// Maintenant on peut ajouter l'orchestrateur aux handoffs du memoryAgent et healthAgent
memoryAgent.handoffs = [orchestratorAgent];
healthAgent.handoffs = [orchestratorAgent];
softMorningPodcastAgent.handoffs = [orchestratorAgent, alterEgoAgent];
alterEgoAgent.handoffs = [orchestratorAgent];

export const orchestratorScenario = [
  orchestratorAgent,
  healthAgent,
  memoryAgent,
  alterEgoAgent,
  softMorningPodcastAgent,
];
