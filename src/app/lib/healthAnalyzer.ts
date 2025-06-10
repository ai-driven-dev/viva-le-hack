import { HealthAnalysis, HealthData } from "@/app/types";

export class HealthAnalyzer {
  // Optimal ranges for health metrics
  private static readonly OPTIMAL_RANGES = {
    sleep: { min: 7, max: 9, ideal: 8 },
    temperature: { min: 36.5, max: 37.5, ideal: 37 },
    bpm: {
      resting: { min: 60, max: 100, ideal: 70 },
      // Adjust these based on user's age and fitness level if needed
    },
  };

  static analyzeHealthData(data: HealthData): HealthAnalysis {
    const sleepScore = this.calculateSleepScore(data.sleepDuration);
    const tempScore = this.calculateTemperatureScore(data.bodyTemperature);
    const heartRateScore = this.calculateHeartRateScore(data.bpm);

    const overallScore = Math.round(
      (sleepScore + tempScore + heartRateScore) / 3
    );

    const status = this.getHealthStatus(overallScore);
    const summary = this.generateSummary(data, {
      sleepScore,
      tempScore,
      heartRateScore,
      overallScore,
    });
    const recommendations = this.generateRecommendations(data, {
      sleepScore,
      tempScore,
      heartRateScore,
    });
    const concerns = this.identifyConcerns(data, {
      sleepScore,
      tempScore,
      heartRateScore,
    });

    return {
      status,
      summary,
      recommendations,
      concerns,
      scores: {
        sleep: sleepScore,
        temperature: tempScore,
        heartRate: heartRateScore,
        overall: overallScore,
      },
    };
  }

  private static calculateSleepScore(hours: number): number {
    const { min, max, ideal } = this.OPTIMAL_RANGES.sleep;

    if (hours >= min && hours <= max) {
      // Perfect score if close to ideal
      const deviation = Math.abs(hours - ideal);
      return Math.round(100 - deviation * 10);
    }

    if (hours < min) {
      // Penalize more for too little sleep
      const deficit = min - hours;
      return Math.max(0, Math.round(70 - deficit * 20));
    }

    // Penalize for too much sleep
    const excess = hours - max;
    return Math.max(0, Math.round(80 - excess * 15));
  }

  private static calculateTemperatureScore(temp: number): number {
    const { min, max, ideal } = this.OPTIMAL_RANGES.temperature;

    if (temp >= min && temp <= max) {
      const deviation = Math.abs(temp - ideal);
      return Math.round(100 - deviation * 20);
    }

    // Fever or hypothermia concerns
    if (temp > max) {
      const excess = temp - max;
      return Math.max(0, Math.round(50 - excess * 30));
    }

    const deficit = min - temp;
    return Math.max(0, Math.round(50 - deficit * 40));
  }

  private static calculateHeartRateScore(bpm: number): number {
    const { min, max, ideal } = this.OPTIMAL_RANGES.bpm.resting;

    if (bpm >= min && bpm <= max) {
      const deviation = Math.abs(bpm - ideal);
      return Math.round(100 - deviation * 0.5);
    }

    if (bpm < min) {
      // Low heart rate (could be athletic or concerning)
      const deficit = min - bpm;
      return Math.max(0, Math.round(85 - deficit * 2));
    }

    // High heart rate
    const excess = bpm - max;
    return Math.max(0, Math.round(60 - excess * 2));
  }

  private static getHealthStatus(
    overallScore: number
  ): "excellent" | "good" | "moderate" | "poor" {
    if (overallScore >= 90) return "excellent";
    if (overallScore >= 75) return "good";
    if (overallScore >= 50) return "moderate";
    return "poor";
  }

  private static generateSummary(
    data: HealthData,
    scores: {
      sleepScore: number;
      tempScore: number;
      heartRateScore: number;
      overallScore: number;
    }
  ): string {
    const status = this.getHealthStatus(scores.overallScore);
    const time = new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    let summary = `Bonjour ! Il est ${time}. Votre état de santé ce matin est ${
      status === "excellent"
        ? "excellent"
        : status === "good"
        ? "bon"
        : status === "moderate"
        ? "modéré"
        : "préoccupant"
    }. `;

    // Sleep commentary
    if (data.sleepDuration < 6) {
      summary += `Vous n'avez dormi que ${data.sleepDuration} heures, ce qui est insuffisant. `;
    } else if (data.sleepDuration > 9) {
      summary += `Vous avez dormi ${data.sleepDuration} heures, ce qui est plus que nécessaire. `;
    } else {
      summary += `Vous avez eu ${data.sleepDuration} heures de sommeil. `;
    }

    // Temperature commentary
    if (data.bodyTemperature > 37.5) {
      summary += `Votre température corporelle est élevée (${data.bodyTemperature}°C). `;
    } else if (data.bodyTemperature < 36.5) {
      summary += `Votre température corporelle est basse (${data.bodyTemperature}°C). `;
    }

    // Heart rate commentary
    if (data.bpm > 100) {
      summary += `Votre rythme cardiaque est élevé (${data.bpm} bpm). `;
    } else if (data.bpm < 60) {
      summary += `Votre rythme cardiaque est bas (${data.bpm} bpm). `;
    }

    return summary.trim();
  }

  private static generateRecommendations(
    data: HealthData,
    scores: { sleepScore: number; tempScore: number; heartRateScore: number }
  ): string[] {
    const recommendations: string[] = [];

    // Sleep recommendations
    if (scores.sleepScore < 70) {
      if (data.sleepDuration < 7) {
        recommendations.push("Essayez de dormir au moins 7-8 heures par nuit");
        recommendations.push("Établissez une routine de sommeil régulière");
      } else {
        recommendations.push(
          "Évitez de dormir plus de 9 heures pour maintenir un cycle de sommeil sain"
        );
      }
    }

    // Temperature recommendations
    if (scores.tempScore < 70) {
      if (data.bodyTemperature > 37.5) {
        recommendations.push(
          "Surveillez votre température et consultez un médecin si elle persiste"
        );
        recommendations.push("Restez hydraté et reposez-vous");
      }
    }

    // Heart rate recommendations
    if (scores.heartRateScore < 70) {
      if (data.bpm > 100) {
        recommendations.push(
          "Pratiquez des exercices de respiration pour réduire votre rythme cardiaque"
        );
        recommendations.push("Évitez la caféine et gérez votre stress");
      }
    }

    // General recommendations
    if (recommendations.length === 0) {
      recommendations.push("Continuez vos bonnes habitudes de santé");
      recommendations.push(
        "Maintenez une alimentation équilibrée et une activité physique régulière"
      );
    }

    return recommendations;
  }

  private static identifyConcerns(
    data: HealthData,
    scores: { sleepScore: number; tempScore: number; heartRateScore: number }
  ): string[] {
    const concerns: string[] = [];

    // Critical temperature
    if (data.bodyTemperature >= 38) {
      concerns.push("Température élevée détectée - possible fièvre");
    } else if (data.bodyTemperature <= 36) {
      concerns.push("Température corporelle basse");
    }

    // Critical heart rate
    if (data.bpm >= 120) {
      concerns.push("Rythme cardiaque très élevé au repos");
    } else if (data.bpm <= 50) {
      concerns.push("Rythme cardiaque très bas");
    }

    // Critical sleep
    if (data.sleepDuration <= 4) {
      concerns.push("Privation de sommeil sévère");
    }

    // Combined concerns
    if (scores.sleepScore < 50 && scores.heartRateScore < 50) {
      concerns.push(
        "Combinaison de manque de sommeil et de stress cardiovasculaire"
      );
    }

    return concerns;
  }
}
