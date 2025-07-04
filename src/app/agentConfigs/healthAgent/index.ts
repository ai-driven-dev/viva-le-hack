import { HealthStorage } from "@/app/lib/healthStorage";
import { DailyHealthReport } from "@/app/types";
import { RealtimeAgent, tool } from "@openai/agents/realtime";

// Outil pour récupérer le rapport de santé depuis l'API
const fetchHealthReportFromAPI = tool({
  name: "fetch_health_report_from_api",
  description:
    "Récupère le rapport de santé du jour depuis l'API (données envoyées par le shortcut iOS)",
  parameters: {
    type: "object",
    properties: {},
    required: [],
    additionalProperties: false,
  },
  execute: async () => {
    try {
      const response = await fetch("/api/health", {
        method: "GET",
      });

      const data = await response.json();

      if (data.success && data.report) {
        // Sauvegarder dans le localStorage pour une utilisation future
        if (typeof window !== "undefined") {
          HealthStorage.saveHealthReport(data.report as DailyHealthReport);

          // Sauvegarder aussi l'historique complet si disponible
          if (data.allReports) {
            HealthStorage.saveAllReports(data.allReports);
          }
        }

        return {
          success: true,
          report: data.report,
          allReports: data.allReports,
          source: "api",
        };
      }

      return {
        success: false,
        message: "Aucune donnée de santé trouvée dans l'API",
        allReports: data.allReports,
      };
    } catch (error) {
      return {
        success: false,
        message: "Erreur lors de la récupération des données depuis l'API",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
});

// Outil pour récupérer le rapport de santé du jour
const getTodayHealthReport = tool({
  name: "get_today_health_report",
  description:
    "Récupère le rapport de santé du jour s'il existe (vérifie d'abord l'API puis le localStorage)",
  parameters: {
    type: "object",
    properties: {},
    required: [],
    additionalProperties: false,
  },
  execute: async () => {
    // D'abord essayer de récupérer depuis l'API
    try {
      const response = await fetch("/api/health", {
        method: "GET",
      });

      const data = await response.json();

      if (data.success && data.report) {
        // Sauvegarder dans le localStorage pour une utilisation future
        if (typeof window !== "undefined") {
          HealthStorage.saveHealthReport(data.report as DailyHealthReport);
        }

        return {
          success: true,
          report: data.report,
          source: "api",
        };
      }
    } catch {
      console.log(
        "Impossible de récupérer depuis l'API, vérification du localStorage"
      );
    }

    // Si l'API échoue, vérifier le localStorage
    const report = HealthStorage.getTodayReport();
    if (!report) {
      return {
        success: false,
        message: "Aucun rapport de santé n'a été trouvé pour aujourd'hui.",
      };
    }

    return {
      success: true,
      report: {
        data: report.data,
        analysis: report.analysis,
        createdAt: report.createdAt,
      },
      source: "localStorage",
    };
  },
});

// Outil pour récupérer l'historique de santé
const getHealthHistory = tool({
  name: "get_health_history",
  description:
    "Récupère l'historique des rapports de santé sur une période donnée",
  parameters: {
    type: "object",
    properties: {
      days: {
        type: "number",
        description: "Nombre de jours d'historique à récupérer (max 30)",
      },
    },
    required: ["days"],
    additionalProperties: false,
  },
  execute: async (input) => {
    const { days } = input as { days: number };

    // D'abord essayer de récupérer depuis l'API pour avoir les données les plus récentes
    try {
      const response = await fetch("/api/health", {
        method: "GET",
      });

      const data = await response.json();
      if (data.allReports) {
        // Sauvegarder l'historique complet dans le localStorage
        if (typeof window !== "undefined") {
          HealthStorage.saveAllReports(data.allReports);
        }
      }
    } catch (error) {
      console.log("Impossible de récupérer l'historique depuis l'API");
    }

    // Récupérer l'historique du localStorage
    const reports = HealthStorage.getLastNDaysReports(Math.min(days, 30));

    if (reports.length === 0) {
      return {
        success: false,
        message: "Aucun historique de santé disponible.",
      };
    }

    return {
      success: true,
      count: reports.length,
      reports: reports.map((r) => ({
        date: new Date(r.createdAt).toLocaleDateString("fr-FR"),
        data: r.data,
        status: r.analysis.status,
        scores: r.analysis.scores,
      })),
    };
  },
});

// Outil pour calculer les moyennes
const getHealthAverages = tool({
  name: "get_health_averages",
  description: "Calcule les moyennes de santé sur une période donnée",
  parameters: {
    type: "object",
    properties: {
      days: {
        type: "number",
        description: "Nombre de jours pour calculer les moyennes (défaut: 7)",
      },
    },
    required: [],
    additionalProperties: false,
  },
  execute: async (input) => {
    const { days = 7 } = input as { days?: number };
    const averages = HealthStorage.getAverageHealthData(days);

    if (!averages) {
      return {
        success: false,
        message: "Pas assez de données pour calculer les moyennes.",
      };
    }

    return {
      success: true,
      period: `${days} derniers jours`,
      averages: {
        sleepHours: averages.avgSleep,
        temperature: averages.avgTemperature,
        bpm: averages.avgBpm,
      },
    };
  },
});

// Outil pour analyser les tendances
const analyzeHealthTrends = tool({
  name: "analyze_health_trends",
  description: "Analyse les tendances de santé et identifie les patterns",
  parameters: {
    type: "object",
    properties: {
      metric: {
        type: "string",
        enum: ["sleep", "temperature", "bpm", "all"],
        description: "Métrique à analyser ou 'all' pour toutes",
      },
    },
    required: ["metric"],
    additionalProperties: false,
  },
  execute: async (input) => {
    try {
      const { metric } = input as { metric: string };
      const reports = HealthStorage.getLastNDaysReports(7);

      if (reports.length < 3) {
        return {
          success: true,
          message:
            "Pas assez de données pour analyser les tendances (minimum 3 jours).",
          trends: {
            metric,
            period: "Données insuffisantes",
            analysis: {
              note: "Continuez à enregistrer vos données pour obtenir des analyses plus précises.",
            },
          },
        };
      }

      const trends: any = {
        metric,
        period: "7 derniers jours",
        analysis: {},
      };

      // Analyze sleep trends
      if (metric === "sleep" || metric === "all") {
        const sleepData = reports
          .map((r) => r.data.sleepDuration)
          .filter((d) => d > 0);
        if (sleepData.length > 0) {
          const sleepTrend = analyzeTrend(sleepData);
          trends.analysis.sleep = {
            trend: sleepTrend,
            current: sleepData[0],
            average: sleepData.reduce((a, b) => a + b, 0) / sleepData.length,
            recommendation: getSleepRecommendation(sleepTrend, sleepData[0]),
          };
        }
      }

      // Analyze temperature trends
      if (metric === "temperature" || metric === "all") {
        const tempData = reports
          .map((r) => r.data.bodyTemperature)
          .filter((d) => d > 0);
        if (tempData.length > 0) {
          const tempTrend = analyzeTrend(tempData);
          trends.analysis.temperature = {
            trend: tempTrend,
            current: tempData[0],
            average: tempData.reduce((a, b) => a + b, 0) / tempData.length,
            recommendation: getTemperatureRecommendation(
              tempTrend,
              tempData[0]
            ),
          };
        }
      }

      // Analyze BPM trends
      if (metric === "bpm" || metric === "all") {
        const bpmData = reports.map((r) => r.data.bpm).filter((d) => d > 0);
        if (bpmData.length > 0) {
          const bpmTrend = analyzeTrend(bpmData);
          trends.analysis.bpm = {
            trend: bpmTrend,
            current: bpmData[0],
            average: bpmData.reduce((a, b) => a + b, 0) / bpmData.length,
            recommendation: getBpmRecommendation(bpmTrend, bpmData[0]),
          };
        }
      }

      return {
        success: true,
        trends,
      };
    } catch {
      // En cas d'erreur, retourner un résultat par défaut pour ne pas bloquer
      return {
        success: true,
        message:
          "Erreur lors de l'analyse des tendances, mais données de base disponibles.",
        trends: {
          metric: (input as { metric: string }).metric,
          period: "Analyse partielle",
          analysis: {
            note: "Analyse complète indisponible, mais vos données de base sont enregistrées.",
          },
        },
      };
    }
  },
});

// Helper functions
function analyzeTrend(data: number[]): "improving" | "stable" | "degrading" {
  if (data.length < 2) return "stable";

  const recentAvg =
    data.slice(0, Math.floor(data.length / 2)).reduce((a, b) => a + b, 0) /
    Math.floor(data.length / 2);
  const olderAvg =
    data.slice(Math.floor(data.length / 2)).reduce((a, b) => a + b, 0) /
    (data.length - Math.floor(data.length / 2));

  // Éviter la division par zéro
  if (olderAvg === 0) return "stable";

  const change = ((recentAvg - olderAvg) / olderAvg) * 100;

  if (Math.abs(change) < 5) return "stable";
  return change > 0 ? "improving" : "degrading";
}

function getSleepRecommendation(trend: string, current: number): string {
  if (current < 6) return "Augmentez progressivement votre temps de sommeil.";
  if (current > 9)
    return "Essayez de réduire légèrement votre temps de sommeil.";
  if (trend === "degrading")
    return "Maintenez une routine de sommeil régulière.";
  return "Continuez vos bonnes habitudes de sommeil.";
}

function getTemperatureRecommendation(trend: string, current: number): string {
  if (current > 37.5)
    return "Surveillez votre température et consultez si elle persiste.";
  if (current < 36.5) return "Assurez-vous de rester au chaud.";
  return "Température corporelle normale.";
}

function getBpmRecommendation(trend: string, current: number): string {
  if (current > 100) return "Pratiquez des exercices de relaxation.";
  if (current < 60) return "Consultez si vous ressentez des symptômes.";
  if (trend === "degrading") return "Surveillez votre rythme cardiaque.";
  return "Rythme cardiaque dans la normale.";
}

export const healthAgent = new RealtimeAgent({
  name: "healthAgent",
  voice: "sage",
  instructions: `OBJECTIF : Analyser la santé et retourner les données à l'orchestrateur.

WORKFLOW :
1. get_today_health_report
2. analyze_health_trends (metric="all")
3. transfer_to_orchestrator avec résumé : "Données santé analysées : [prénom], [bpm], [température], [sommeil], [recommandations]. Prêt pour Memory Agent."

IMPORTANT : 
- Ne parle PAS à l'utilisateur
- Retourne juste les données à l'orchestrateur
- Format concis pour transmission`,
  tools: [
    fetchHealthReportFromAPI,
    getTodayHealthReport,
    getHealthHistory,
    getHealthAverages,
    analyzeHealthTrends,
  ],
  handoffs: [],
  handoffDescription:
    "Agent spécialisé dans l'analyse et le suivi de votre santé quotidienne",
});
