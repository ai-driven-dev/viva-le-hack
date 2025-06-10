import { orchestratorScenario } from "./orchestrator";

import type { RealtimeAgent } from "@openai/agents/realtime";

// Map of scenario key -> array of RealtimeAgent objects
export const allAgentSets: Record<string, RealtimeAgent[]> = {
  // Scénario principal avec orchestrateur
  main: orchestratorScenario,
};

export const defaultAgentSetKey = "main";
