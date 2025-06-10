import { HealthAnalyzer } from "@/app/lib/healthAnalyzer";
import {
  DailyHealthReport,
  HealthDataSchema,
  UserHealthStorage,
  UserInfoSchema,
} from "@/app/types";
import { mkdir, readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

// Temporary storage path
const HEALTH_DATA_DIR = path.join(process.cwd(), ".health-data");
const HEALTH_DATA_FILE = path.join(HEALTH_DATA_DIR, "health-reports.json");

// Ensure directory exists
async function ensureHealthDataDir() {
  try {
    await mkdir(HEALTH_DATA_DIR, { recursive: true });
  } catch (error) {
    console.error("Error creating health data directory:", error);
  }
}

// Read existing data
async function readExistingData(): Promise<UserHealthStorage> {
  try {
    const data = await readFile(HEALTH_DATA_FILE, "utf-8");
    const parsedData = JSON.parse(data) as UserHealthStorage;
    // Ensure reports object exists
    if (!parsedData.reports) {
      parsedData.reports = {};
    }
    return parsedData;
  } catch {
    return {
      userInfo: {
        firstName: "",
        lastName: "",
        city: "",
      },
      reports: {},
    };
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
    city: data.city,
    date: data.date,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log("body", body);

    const { healthData, userInfo } = body;

    // Validate user info if provided
    if (userInfo) {
      const userInfoValidation = UserInfoSchema.safeParse(userInfo);
      if (!userInfoValidation.success) {
        return NextResponse.json(
          {
            error: "Invalid user information",
            details: userInfoValidation.error.errors,
          },
          { status: 400 }
        );
      }
    }

    // Map and validate health data
    const mappedData = mapHealthData(healthData);
    console.log("mappedData", mappedData);

    const validationResult = HealthDataSchema.safeParse(mappedData);

    console.log("validationResult", validationResult);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid health data",
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    // Use provided date or today's date for the report
    const reportDate =
      validationResult.data.date || new Date().toISOString().split("T")[0];

    console.log("reportDate", reportDate);

    const healthDataValidated = {
      ...validationResult.data,
      // Use the report date to create the timestamp
      timestamp: new Date(reportDate).toISOString(),
    };

    // Read existing data
    await ensureHealthDataDir();
    const existingData = await readExistingData();

    // Update user info if provided
    if (userInfo) {
      existingData.userInfo = userInfo;
    }

    // For checking city change, use the day before the report date
    const previousDay = new Date(reportDate);
    previousDay.setDate(previousDay.getDate() - 1);
    const previousDayStr = previousDay.toISOString().split("T")[0];

    // Safely check for city change
    let cityChanged = false;
    let previousCity = undefined;

    if (existingData.reports && existingData.reports[previousDayStr]) {
      const previousDayReport = existingData.reports[previousDayStr];
      if (previousDayReport.data.city !== healthDataValidated.city) {
        cityChanged = true;
        previousCity = previousDayReport.data.city;
      }
    }

    // Analyze the health data
    const analysis = HealthAnalyzer.analyzeHealthData(healthDataValidated);

    // Add city change information to analysis if relevant
    if (cityChanged) {
      analysis.cityChanged = true;
      analysis.previousCity = previousCity;
    }

    // Create the daily report
    const report: DailyHealthReport = {
      data: healthDataValidated,
      analysis,
      createdAt: new Date(reportDate).toISOString(),
    };

    // Ensure reports object exists
    if (!existingData.reports) {
      existingData.reports = {};
    }

    // Add new report using the report date
    existingData.reports[reportDate] = report;

    // Save all data
    await writeFile(HEALTH_DATA_FILE, JSON.stringify(existingData, null, 2));

    // Return the analysis
    return NextResponse.json({
      success: true,
      report,
      userInfo: existingData.userInfo,
      message: analysis.summary,
      reportDate,
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
    // Read all data
    const data = await readExistingData();
    const today = new Date().toISOString().split("T")[0];

    // Check if we have a report for today
    if (data.reports && data.reports[today]) {
      return NextResponse.json({
        success: true,
        report: data.reports[today],
        userInfo: data.userInfo,
        allReports: data.reports,
        message: "Today's health report retrieved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        userInfo: data.userInfo,
        allReports: data.reports || {},
        message: "No health data for today",
      });
    }
  } catch {
    return NextResponse.json({
      success: false,
      message: "No health data available",
      expectedFormat: {
        healthData: {
          sleepDuration: "number (hours)",
          bodyTemperature: "number (Celsius)",
          bpm: "number (beats per minute)",
          city: "string (current city)",
          timestamp: "string (optional, ISO format)",
        },
        userInfo: {
          firstName: "string",
          lastName: "string",
          city: "string",
        },
      },
    });
  }
}
