import { DailyHealthReport } from "@/app/types";

const HEALTH_STORAGE_KEY = "daily_health_reports";
const MAX_STORED_REPORTS = 30; // Keep last 30 days of data

export class HealthStorage {
  static saveHealthReport(report: DailyHealthReport): void {
    if (typeof window === "undefined") return;

    const reports = this.getAllReports();
    reports.unshift(report); // Add new report at the beginning

    // Keep only the last MAX_STORED_REPORTS
    const trimmedReports = reports.slice(0, MAX_STORED_REPORTS);

    localStorage.setItem(HEALTH_STORAGE_KEY, JSON.stringify(trimmedReports));
  }

  static getAllReports(): DailyHealthReport[] {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem(HEALTH_STORAGE_KEY);
    if (!stored) return [];

    try {
      return JSON.parse(stored) as DailyHealthReport[];
    } catch (error) {
      console.error("Error parsing health reports:", error);
      return [];
    }
  }

  static getTodayReport(): DailyHealthReport | null {
    const reports = this.getAllReports();
    if (reports.length === 0) return null;

    const today = new Date().toDateString();
    const latestReport = reports[0];
    const reportDate = new Date(latestReport.createdAt).toDateString();

    return reportDate === today ? latestReport : null;
  }

  static getReportsByDateRange(
    startDate: Date,
    endDate: Date
  ): DailyHealthReport[] {
    const reports = this.getAllReports();

    return reports.filter((report) => {
      const reportDate = new Date(report.createdAt);
      return reportDate >= startDate && reportDate <= endDate;
    });
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
