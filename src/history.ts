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

export interface Store {
  newSession: (id: string, user_name?: string) => void;
  getSession: (id: string) => Promise<StoreSession>;

  updateSession: (
    id: string,
    new_data: {
      user_name?: string;
      saved_prompts?: Record<string, string>;
    }
  ) => void;

  getHistory: (session: StoreSession) => Promise<LLMHistory[]>;
  pushHistory: (session: StoreSession, history: LLMHistory) => Promise<void>;
  batchPushHistory: (session: StoreSession, history: LLMHistory[]) => Promise<void>;
}
