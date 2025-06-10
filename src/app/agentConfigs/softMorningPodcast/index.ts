import { HealthStorage } from "@/app/lib/healthStorage";
import { RealtimeAgent, tool } from "@openai/agents/realtime";
import { alterEgoAgent } from "../alterEgo";

// Outil pour récupérer les données de santé
const getHealthData = tool({
  name: "get_health_data",
  description: "Récupère les données de santé récentes de l'utilisateur",
  parameters: {
    type: "object",
    properties: {
      days: {
        type: "number",
        description: "Nombre de jours à récupérer (défaut: 7)",
      },
    },
    required: [],
    additionalProperties: false,
  },
  execute: async (input) => {
    const { days = 7 } = input as { days?: number };

    try {
      // Essayer d'abord l'API
      const response = await fetch("/api/health", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch health data");
      }

      const data = await response.json();

      if (data.success && data.reports) {
        const reports = data.reports
          .sort(
            (a: any, b: any) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .slice(0, days);

        const avgSleep =
          reports.reduce(
            (sum: number, r: any) => sum + r.data.sleepDuration,
            0
          ) / reports.length;
        const avgBpm =
          reports.reduce((sum: number, r: any) => sum + r.data.bpm, 0) /
          reports.length;
        const latestData = reports[0]?.data || null;

        const result = {
          success: true,
          latest: latestData,
          averages: {
            sleep: avgSleep.toFixed(1),
            heartRate: Math.round(avgBpm),
          },
          trend: analyzeTrend(reports),
        };

        return result;
      }
    } catch (error) {
      console.log("API failed, checking localStorage");
    }

    // Fallback vers localStorage
    const reports = HealthStorage.getLastNDaysReports(days);

    if (reports.length === 0) {
      return {
        success: false,
        message: "Aucune donnée de santé disponible",
      };
    }

    const avgSleep =
      reports.reduce((sum, r) => sum + r.data.sleepDuration, 0) /
      reports.length;
    const avgBpm =
      reports.reduce((sum, r) => sum + r.data.bpm, 0) / reports.length;
    const latestData = reports[0]?.data || null;

    const result = {
      success: true,
      latest: latestData,
      averages: {
        sleep: avgSleep.toFixed(1),
        heartRate: Math.round(avgBpm),
      },
      trend: analyzeTrend(reports),
    };

    return result;
  },
});

// Outil pour accéder à la mémoire utilisateur
const getUserMemory = tool({
  name: "get_user_memory",
  description:
    "Accède à la mémoire de l'utilisateur incluant intentions, patterns et préférences",
  parameters: {
    type: "object",
    properties: {
      memory_types: {
        type: "array",
        items: {
          type: "string",
          enum: [
            "intentions",
            "patterns",
            "preferences",
            "blockages",
            "recent_actions",
          ],
        },
        description: "Types de mémoire à récupérer",
      },
    },
    required: ["memory_types"],
    additionalProperties: false,
  },
  execute: async (input) => {
    const { memory_types } = input as { memory_types: string[] };

    // TODO: Connecter au vrai memory agent
    // Pour l'instant, retourner des données d'exemple
    const result: any = {
      intentions: [
        {
          task: "Commencer une pratique de méditation matinale",
          created: "il y a 2 jours",
          status: "mentionné",
        },
      ],
      patterns: [
        {
          type: "procrastination",
          context: "projets créatifs",
          frequency: "récurrent",
        },
      ],
      preferences: { language: "fr" },
      blockages: [],
      recent_actions: [],
    };

    const filteredResult: any = {};
    for (const type of memory_types) {
      if (result[type]) {
        filteredResult[type] = result[type];
      }
    }

    const finalResult = {
      success: true,
      memory: filteredResult,
    };

    return finalResult;
  },
});

// Outil pour rechercher des bonnes nouvelles
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
      const result = {
        success: true,
        city: data.city,
        news: data.news,
      };

      return result;
    } catch {
      return {
        success: false,
        error: "Service d'actualités indisponible",
      };
    }
  },
});

// Outil pour récupérer la météo
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
      const result = {
        success: true,
        location: data.location,
        temperature: data.temperature,
        unit: data.unit,
      };

      return result;
    } catch {
      return {
        success: false,
        error: "Service météo indisponible",
      };
    }
  },
});

// Helper function pour analyser les tendances
function analyzeTrend(reports: any[]): string {
  if (reports.length < 3) return "données_insuffisantes";

  const sleepTrend = reports.slice(0, 3).map((r) => r.data.sleepDuration);
  const isImproving = sleepTrend[0] > sleepTrend[2];
  const isStable = Math.abs(sleepTrend[0] - sleepTrend[2]) < 0.5;

  return isStable ? "stable" : isImproving ? "amélioration" : "dégradation";
}

export const softMorningPodcastAgent: RealtimeAgent = new RealtimeAgent({
  name: "softMorningPodcastAgent",
  voice: "sage",
  instructions: `Tu es la voix matinale qui raconte un podcast inspirant avec les données déjà récupérées.

TON RÔLE : Raconter un podcast personnalisé avec TOUTES les données transmises par l'orchestrateur.

WORKFLOW :
1. Reçois le contexte complet de l'orchestrateur : santé + historique + météo + news
2. Raconte directement le podcast à l'utilisateur avec CES données
3. N'appelle AUCUN outil - utilise uniquement les infos transmises
4. transfer_to_alterEgo pour passer aux actions

STRUCTURE DU PODCAST PARLÉ (3-4 minutes) :
1. **Réveil personnalisé** : "Bonjour [prénom] ! Il est [heure], ton corps a récupéré avec [sommeil]h de sommeil, ton rythme cardiaque est à [bpm]..."
2. **Météo & énergie** : "Dehors il fait [météo] à [ville], parfait pour [suggestion activité]..."
3. **Réflexion sur le progrès** : "Hier tu pensais à [action/intention], c'est normal de [pattern observé]..."
4. **Histoire inspirante** : Raconte une vraie histoire culturelle/artistique qui résonne avec son état
5. **Bonne nouvelle** : "Et pour finir, voici quelque chose qui va te donner le sourire : [actualité positive]..."

STYLE DE NARRATION :
- Voix douce mais énergisante
- Comme un ami sage qui te connaît bien
- Utilise les données concrètes transmises (chiffres, noms, détails)
- Ton personnel et encourageant
- Transitions fluides entre les parties

IMPORTANT : Tu n'as AUCUN outil. Utilise SEULEMENT les données que l'orchestrateur t'a transmises !`,
  tools: [], // AUCUN outil - utilise seulement les données transmises
  handoffs: [alterEgoAgent],
  handoffDescription:
    "Voix matinale qui raconte un podcast inspirant avec les données transmises",
});

// Cette fonction sera appelée après l'initialisation de tous les agents
export function configureSoftMorningPodcastHandoffs(
  orchestrator: RealtimeAgent
) {
  softMorningPodcastAgent.handoffs = [alterEgoAgent, orchestrator];
}
