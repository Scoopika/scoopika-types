import { AgentResponse } from "./agents";
import { RunInputs } from "./inputs";
import { LLMToolCall } from "./models";

export interface StoreSession {
  id: string;
  user_name?: string;
  saved_prompts: Record<string, string>;
  user_id?: string;
  title?: string;
}

export interface UserTextContent {
  type: "text";
  text: string;
}

export interface UserImageContent {
  type: "image_url";
  image_url: {
    url: string;
  };
}

export interface UserContentHistory {
  role: "user";
  name?: string;
  follow_up?: boolean;
  content: string | Array<UserTextContent | UserImageContent>;
}

export interface ContentHistory {
  role: "system" | "assistant" | "model" | "prompt";
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

export type LLMHistory = UserContentHistory | ContentHistory | ToolHistory;

export interface UserRunHistory {
  at: number;
  role: "user";
  user_id?: string;
  run_id: string;
  session_id: string;
  request: RunInputs;
  resolved_message: string;
}

export interface AgentRunHistory {
  at: number;
  role: "agent";
  run_id: string;
  session_id: string;
  agent_id: string;
  agent_name: string;
  response: AgentResponse;
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
  pushHistory: (
    session: StoreSession | string,
    history: LLMHistory,
  ) => Promise<void>;
  batchPushHistory: (
    session: StoreSession,
    history: LLMHistory[],
  ) => Promise<void>;

  getRuns: (session: StoreSession) => Promise<RunHistory[]>;
}
