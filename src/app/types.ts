import { z } from "zod";

// Define the allowed moderation categories only once
export const MODERATION_CATEGORIES = [
  "OFFENSIVE",
  "OFF_BRAND",
  "VIOLENCE",
  "NONE",
] as const;

// Derive the union type for ModerationCategory from the array
export type ModerationCategory = (typeof MODERATION_CATEGORIES)[number];

// Create a Zod enum based on the same array
export const ModerationCategoryZod = z.enum([...MODERATION_CATEGORIES]);

export type SessionStatus = "DISCONNECTED" | "CONNECTING" | "CONNECTED";

export interface ToolParameterProperty {
  type: string;
  description?: string;
  enum?: string[];
  pattern?: string;
  properties?: Record<string, ToolParameterProperty>;
  required?: string[];
  additionalProperties?: boolean;
  items?: ToolParameterProperty;
}

export interface ToolParameters {
  type: string;
  properties: Record<string, ToolParameterProperty>;
  required?: string[];
  additionalProperties?: boolean;
}

export interface Tool {
  type: "function";
  name: string;
  description: string;
  parameters: ToolParameters;
}

export interface AgentConfig {
  name: string;
  publicDescription: string; // gives context to agent transfer tool
  instructions: string;
  tools: Tool[];
  toolLogic?: Record<
    string,
    (args: any, transcriptLogsFiltered: TranscriptItem[], addTranscriptBreadcrumb?: (title: string, data?: any) => void) => Promise<any> | any
  >;
  // addTranscriptBreadcrumb is a param in case we want to add additional breadcrumbs, e.g. for nested tool calls from a supervisor agent.
  downstreamAgents?:
    | AgentConfig[]
    | { name: string; publicDescription: string }[];
}

export type AllAgentConfigsType = Record<string, AgentConfig[]>;

export interface GuardrailResultType {
  status: "IN_PROGRESS" | "DONE";
  testText?: string; 
  category?: ModerationCategory;
  rationale?: string;
}

export interface TranscriptItem {
  itemId: string;
  type: "MESSAGE" | "BREADCRUMB";
  role?: "user" | "assistant";
  title?: string;
  data?: Record<string, any>;
  expanded: boolean;
  timestamp: string;
  createdAtMs: number;
  status: "IN_PROGRESS" | "DONE";
  isHidden: boolean;
  guardrailResult?: GuardrailResultType;
}

export interface Log {
  id: number;
  timestamp: string;
  direction: string;
  eventName: string;
  data: any;
  expanded: boolean;
  type: string;
}

export interface ServerEvent {
  type: string;
  event_id?: string;
  item_id?: string;
  transcript?: string;
  delta?: string;
  session?: {
    id?: string;
  };
  item?: {
    id?: string;
    object?: string;
    type?: string;
    status?: string;
    name?: string;
    arguments?: string;
    role?: "user" | "assistant";
    content?: {
      type?: string;
      transcript?: string | null;
      text?: string;
    }[];
  };
  response?: {
    output?: {
      id: string;
      type?: string;
      name?: string;
      arguments?: any;
      call_id?: string;
      role: string;
      content?: any;
    }[];
    metadata: Record<string, any>;
    status_details?: {
      error?: any;
    };
  };
}

export interface LoggedEvent {
  id: number;
  direction: "client" | "server";
  expanded: boolean;
  timestamp: string;
  eventName: string;
  eventData: Record<string, any>; // can have arbitrary objects logged
}

// Update the GuardrailOutputZod schema to use the shared ModerationCategoryZod
export const GuardrailOutputZod = z.object({
  moderationRationale: z.string(),
  moderationCategory: ModerationCategoryZod,
});

export type GuardrailOutput = z.infer<typeof GuardrailOutputZod>;


// Health tracking types
export interface UserInfo {
  firstName: string;
  lastName: string;
  city: string;
}

export interface HealthData {
  sleepDuration: number; // in hours
  bodyTemperature: number; // in Celsius
  bpm: number; // beats per minute
  timestamp: string;
  city: string; // Current city of the user
  date?: string; // Optional date for testing (YYYY-MM-DD format)
}

export interface HealthAnalysis {
  status: "excellent" | "good" | "moderate" | "poor";
  summary: string;
  recommendations: string[];
  concerns: string[];
  scores: {
    sleep: number; // 0-100
    temperature: number; // 0-100
    heartRate: number; // 0-100
    overall: number; // 0-100
  };
  cityChanged?: boolean; // Indicates if the user's city has changed since last report
  previousCity?: string; // Previous city if changed
}

export interface DailyHealthReport {
  data: HealthData;
  analysis: HealthAnalysis;
  createdAt: string;
}

export interface UserHealthStorage {
  userInfo: UserInfo;
  reports: {
    [date: string]: DailyHealthReport;
  };
}

// Zod schemas for validation
export const UserInfoSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  city: z.string().min(1),
});

export const HealthDataSchema = z.object({
  sleepDuration: z.number().min(0).max(24),
  bodyTemperature: z.number().min(35).max(42),
  bpm: z.number().min(40).max(200),
  timestamp: z.string().optional(),
  city: z.string().min(1),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(), // YYYY-MM-DD format
});

export type HealthDataInput = z.infer<typeof HealthDataSchema>;
export type UserInfoInput = z.infer<typeof UserInfoSchema>;
