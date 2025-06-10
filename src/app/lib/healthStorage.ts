import { DailyHealthReport } from "@/app/types";

const HEALTH_STORAGE_KEY = "daily_health_reports";
const MAX_STORED_REPORTS = 30; // Keep last 30 days of data

interface HealthReportsStorage {
  [date: string]: DailyHealthReport;
}

export class HealthStorage {
  static saveHealthReport(report: DailyHealthReport): void {
    if (typeof window === "undefined") return;

    const reports = this.getAllReports();
    const dateKey = new Date(report.createdAt).toISOString().split("T")[0];
    reports[dateKey] = report;

    // Keep only the last MAX_STORED_REPORTS
    const sortedDates = Object.keys(reports).sort().reverse();
    if (sortedDates.length > MAX_STORED_REPORTS) {
      const reportsToKeep = sortedDates
        .slice(0, MAX_STORED_REPORTS)
        .reduce((acc, date) => {
          acc[date] = reports[date];
          return acc;
        }, {} as HealthReportsStorage);

      localStorage.setItem(HEALTH_STORAGE_KEY, JSON.stringify(reportsToKeep));
    } else {
      localStorage.setItem(HEALTH_STORAGE_KEY, JSON.stringify(reports));
    }
  }

  static saveAllReports(reports: HealthReportsStorage): void {
    if (typeof window === "undefined") return;

    // Keep only the last MAX_STORED_REPORTS
    const sortedDates = Object.keys(reports).sort().reverse();
    if (sortedDates.length > MAX_STORED_REPORTS) {
      const reportsToKeep = sortedDates
        .slice(0, MAX_STORED_REPORTS)
        .reduce((acc, date) => {
          acc[date] = reports[date];
          return acc;
        }, {} as HealthReportsStorage);

      localStorage.setItem(HEALTH_STORAGE_KEY, JSON.stringify(reportsToKeep));
    } else {
      localStorage.setItem(HEALTH_STORAGE_KEY, JSON.stringify(reports));
    }
  }

  static getAllReports(): HealthReportsStorage {
    if (typeof window === "undefined") return {};

    const stored = localStorage.getItem(HEALTH_STORAGE_KEY);
    if (!stored) return {};

    try {
      return JSON.parse(stored) as HealthReportsStorage;
    } catch (error) {
      console.error("Error parsing health reports:", error);
      return {};
    }
  }

  static getTodayReport(): DailyHealthReport | null {
    const reports = this.getAllReports();
    if (Object.keys(reports).length === 0) return null;

    const today = new Date().toISOString().split("T")[0];
    return reports[today] || null;
  }

  static getReportsByDateRange(
    startDate: Date,
    endDate: Date
  ): DailyHealthReport[] {
    const reports = this.getAllReports();
    const startStr = startDate.toISOString().split("T")[0];
    const endStr = endDate.toISOString().split("T")[0];

    return Object.entries(reports)
      .filter(([date]) => date >= startStr && date <= endStr)
      .map(([_, report]) => report);
  }

  static getLastNDaysReports(days: number): DailyHealthReport[] {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    return this.getReportsByDateRange(startDate, endDate);
  }

  static getAverageHealthData(days: number = 7): {
    avgSleep: number;
    avgTemperature: number;
    avgBpm: number;
  } | null {
    const reports = this.getLastNDaysReports(days);

    if (reports.length === 0) return null;

    const totals = reports.reduce(
      (acc, report) => {
        acc.sleep += report.data.sleepDuration;
        acc.temperature += report.data.bodyTemperature;
        acc.bpm += report.data.bpm;
        return acc;
      },
      { sleep: 0, temperature: 0, bpm: 0 }
    );

    return {
      avgSleep: Math.round((totals.sleep / reports.length) * 10) / 10,
      avgTemperature:
        Math.round((totals.temperature / reports.length) * 10) / 10,
      avgBpm: Math.round(totals.bpm / reports.length),
    };
  }

  static clearAllReports(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(HEALTH_STORAGE_KEY);
  }
}
