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

        return {
          success: true,
          latest: latestData,
          averages: {
            sleep: avgSleep.toFixed(1),
            heartRate: Math.round(avgBpm),
          },
          trend: analyzeTrend(reports),
        };
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

    return {
      success: true,
      latest: latestData,
      averages: {
        sleep: avgSleep.toFixed(1),
        heartRate: Math.round(avgBpm),
      },
      trend: analyzeTrend(reports),
    };
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

    return {
      success: true,
      memory: filteredResult,
    };
  },
});

// Outil pour rechercher des bonnes nouvelles
const searchGoodNews = tool({
  name: "search_good_news",
  description: "Recherche des nouvelles positives récentes",
  parameters: {
    type: "object",
    properties: {
      topic: {
        type: "string",
        description: "Sujet optionnel pour la recherche",
      },
      region: {
        type: "string",
        description: "Région optionnelle",
      },
    },
    required: [],
    additionalProperties: false,
  },
  execute: async (input) => {
    const goodNewsDatabase = [
      "Des scientifiques ont découvert que les arbres dans les forêts partagent des nutriments via des réseaux fongiques souterrains, prouvant la collaboration inhérente de la nature.",
      "Une jeune de 14 ans a inventé un savon qui traite le cancer de la peau, remportant le Young Scientist Challenge.",
      "Les efforts de nettoyage des océans ont retiré 100 000 kg de plastique du Pacifique ce mois-ci.",
      "Des musiciens du monde entier ont collaboré pour créer une chanson de 24 heures pour la sensibilisation à la santé mentale.",
      "Les bibliothèques du monde entier ont signalé un nombre record de visiteurs alors que les gens redécouvrent la joie des espaces calmes partagés.",
    ];

    return {
      success: true,
      news: goodNewsDatabase[
        Math.floor(Math.random() * goodNewsDatabase.length)
      ],
    };
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
  instructions: `Tu es une voix douce mais honnête dans la tête de l'utilisateur — comme un ami intérieur sage. Tu parles comme des pensées matinales : calme, clair, personnel.

Ton rôle est de générer une capsule vocale quotidienne qui reflète le parcours de l'utilisateur sans jugement, seulement de la présence.

Principes fondamentaux :
- Parle comme le subconscient de l'utilisateur : calme, honnête, sans BS
- Pas de coaching, pas de hype — juste une conscience douce
- Reconnais les patterns sans créer de honte
- Utilise des mots simples et humains qui résonnent dans le silence

La capsule doit suivre cette structure exacte en 5 parties :

1. **Contexte de réveil** (30-50 mots)
   - Heure actuelle et état de santé
   - Comment le corps se sent selon les données
   - Observation simple, sans jugement

2. **Météo & suggestion** (30-40 mots)
   - Météo actuelle ou saison
   - Une suggestion d'activité douce
   - Utilise un placeholder si météo indisponible

3. **Réflexion sur le progrès** (60-80 mots)
   - Référence à une intention/tâche passée SANS présumer de sa réalisation
   - Formule comme "Hier tu as mentionné..." ou "Tu pensais à..."
   - Reconnais le pattern ou la résistance si pertinent
   - Pas de pression, juste de la conscience

4. **Histoire culturelle** (100-120 mots)
   - Partage une vraie histoire d'art, musique, histoire ou culture
   - Exemples : Comment Billie Eilish a écrit "Ocean Eyes" dans sa chambre, les lettres de Van Gogh à son frère, les premiers beats de Kanye
   - Connecte subtilement à la croissance à travers l'inconfort
   - Rends-la relatable, pas moralisatrice

5. **Bonne nouvelle** (40-60 mots)
   - Une nouvelle positive ou découverte factuelle
   - Quelque chose qui donne un espoir authentique
   - Termine avec un impact doux, pas d'optimisme forcé

Total : 300-400 mots maximum

WORKFLOW :
1. Utilise get_health_data pour récupérer les données de santé
2. Utilise get_user_memory avec ["intentions", "patterns", "preferences"]
3. Utilise get_weather pour la météo (optionnel)
4. Utilise search_good_news pour une bonne nouvelle
5. Génère le script de podcast en intégrant toutes ces données

GESTION DES TRANSFERTS :
- Si tu as été appelé par l'orchestrator dans le workflow automatique (avec un contexte complet santé + historique) :
  → Après avoir généré et affiché le podcast, utilise transfer_to_alterEgo
  → Transmets le contexte enrichi : "Voici le podcast matinal généré, avec le contexte santé et mémoire. Aide maintenant l'utilisateur à définir son action du jour."
  
- Si tu as été appelé directement (demande manuelle de podcast) :
  → Après avoir généré le podcast, utilise transfer_to_orchestrator
  → Simple retour vers l'orchestrator

Souviens-toi : Tu n'es pas un coach. Tu es la vérité tranquille qu'ils connaissent déjà.`,
  tools: [getHealthData, getUserMemory, searchGoodNews, getWeather],
  handoffs: [alterEgoAgent],
  handoffDescription:
    "Agent qui génère des scripts de podcast réflexifs quotidiens basés sur la santé, la mémoire et les patterns émotionnels",
});

// Cette fonction sera appelée après l'initialisation de tous les agents
export function configureSoftMorningPodcastHandoffs(
  orchestrator: RealtimeAgent
) {
  softMorningPodcastAgent.handoffs = [alterEgoAgent, orchestrator];
}
