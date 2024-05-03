import { AgentResponse } from "./agents";
import { Inputs } from "./inputs";
import { LLMResponse, LLMToolCall } from "./models";

export interface StoreSession {
  id: string;
  user_name?: string;
  saved_prompts: Record<string, string>;
  user_id?: string;
}

export interface ContentHistory {
  role: "system" | "user" | "assistant" | "model" | "prompt";
  follow_up?: boolean;
  name?: string;
  content: string;
}

export interface ToolHistory {
  role: "tool";
  tool_call_id: string;
  name: string;
  follow_up?: boolean;
  content: string;
}

export interface ToolCallHistory {
  role: "call";
  name: string;
  follow_up?: boolean;
  args: string;
}

export type LLMHistory = ContentHistory | ToolHistory;

export interface UserRunHistory {
  at: number;
  role: "user";
  user_id?: string;
  request: Inputs;
}

export interface AgentRunHistory {
  at: number;
  role: "agent";
  run_id: string;
  session_id: string;
  agent_id: string;
  responses: {
    prompt_name: string;
    response: LLMResponse
  }[];
  tools: {
    call: LLMToolCall;
    result: any;
  }[];
}

export type RunHistory = UserRunHistory | AgentRunHistory;

export interface Store {
  newSession: (data: {
    id?: string;
    user_id?: string;
    user_name?: string;
  }) => void;

  getSession: (id: string) => Promise<StoreSession | undefined>;
  updateSession: (
    id: string,
    new_data: {
      user_name?: string;
      saved_prompts?: Record<string, string>;
    },
  ) => void;

  getHistory: (session: StoreSession | string) => Promise<LLMHistory[]>;
  pushHistory: (session: StoreSession | string, history: LLMHistory) => Promise<void>;
  batchPushHistory: (
    session: StoreSession,
    history: LLMHistory[],
  ) => Promise<void>;

  getRuns: (session: StoreSession) => Promise<RunHistory[]>;
}
