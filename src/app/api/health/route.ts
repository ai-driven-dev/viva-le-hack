import { HealthAnalyzer } from "@/app/lib/healthAnalyzer";
import { DailyHealthReport, HealthDataSchema } from "@/app/types";
import { mkdir, readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

// Temporary storage path
const HEALTH_DATA_DIR = path.join(process.cwd(), ".health-data");
const HEALTH_DATA_FILE = path.join(HEALTH_DATA_DIR, "health-reports.json");

interface HealthReportsStorage {
  [date: string]: DailyHealthReport;
}

// Ensure directory exists
async function ensureHealthDataDir() {
  try {
    await mkdir(HEALTH_DATA_DIR, { recursive: true });
  } catch (error) {
    console.error("Error creating health data directory:", error);
  }
}

// Read existing reports or create empty storage
async function readExistingReports(): Promise<HealthReportsStorage> {
  try {
    const data = await readFile(HEALTH_DATA_FILE, "utf-8");
    return JSON.parse(data) as HealthReportsStorage;
  } catch {
    return {};
  }
}

// Mapper to convert string values to numbers
function mapHealthData(data: any) {
  return {
    sleepDuration:
      typeof data.sleepDuration === "string"
        ? parseFloat(data.sleepDuration)
        : data.sleepDuration,
    bodyTemperature:
      typeof data.bodyTemperature === "string"
        ? parseFloat(data.bodyTemperature)
        : data.bodyTemperature,
    bpm: typeof data.bpm === "string" ? parseInt(data.bpm, 10) : data.bpm,
    timestamp: data.timestamp,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Map string values to numbers
    const mappedData = mapHealthData(body);

    // Validate input data
    const validationResult = HealthDataSchema.safeParse(mappedData);

    if (!validationResult.success) {
      console.log(validationResult.error.errors);
      return NextResponse.json(
        {
          error: "Invalid health data",
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const healthData = {
      ...validationResult.data,
      timestamp: validationResult.data.timestamp || new Date().toISOString(),
    };

    // Analyze the health data
    const analysis = HealthAnalyzer.analyzeHealthData(healthData);

    // Create the daily report
    const report: DailyHealthReport = {
      data: healthData,
      analysis,
      createdAt: new Date().toISOString(),
    };

    // Read existing reports
    await ensureHealthDataDir();
    const existingReports = await readExistingReports();

    // Add new report with date as key
    const dateKey = new Date().toISOString().split("T")[0];
    existingReports[dateKey] = report;

    // Save all reports
    await writeFile(HEALTH_DATA_FILE, JSON.stringify(existingReports, null, 2));

    // Return the analysis
    return NextResponse.json({
      success: true,
      report,
      message: analysis.summary,
    });
  } catch (error) {
    console.error("Error processing health data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Try to read all health reports
    const reports = await readExistingReports();
    const today = new Date().toISOString().split("T")[0];

    // Check if we have a report for today
    if (reports[today]) {
      return NextResponse.json({
        success: true,
        report: reports[today],
        allReports: reports,
        message: "Today's health report retrieved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        allReports: reports,
        message: "No health data for today",
      });
    }
  } catch {
    return NextResponse.json({
      success: false,
      message: "No health data available",
      expectedFormat: {
        sleepDuration: "number (hours)",
        bodyTemperature: "number (Celsius)",
        bpm: "number (beats per minute)",
        timestamp: "string (optional, ISO format)",
      },
    });
  }
}
