import { Prompt } from "./prompts";
import { ToolSchema } from "./tools";
import { LLMResponse } from "./models";
import { LLMHistory, RunHistory, StoreSession } from "./history";
import { Inputs } from "./inputs";

export interface AgentData {
  id: string;
  name: string;
  avatar?: string;
  description: string;
  chained: boolean;
  prompts: Prompt[];
  timeout?: number;
  tools: ToolSchema[];
  wanted_responses?: string[];
}

export interface AgentInnerRunResult {
  responses: {
    prompt_name: string;
    response: LLMResponse;
  }[];
  updated_history: LLMHistory[];
  run: RunHistory;
}

export interface AgentResponse {
  run_id: string;
  session_id: string;
  responses: {
    prompt_name: string;
    response: LLMResponse;
  }[];
}

export interface StreamMessage {
  final?: boolean;
  type: "text" | "image";
  run_id: string;
  content: string;
  prompt_name: string;
}

export interface ToolCalledMessage {
  name: string;
  result: string;
}

export type StreamFunc = (stream: StreamMessage) => (undefined | void | unknown);
export type StatusUpdateFunc = (status: string) => (undefined | void | unknown);
export type ToolCalledFunc = (data: ToolCalledMessage) => (undefined | void | unknown);

export interface StreamListener {
  type: "stream";
  func: StreamFunc;
}

export interface StatusUpdateListener {
  type: "status";
  func: StatusUpdateFunc;
}

export interface ToolCalledListener {
  type: "tool_call";
  func: ToolCalledFunc;
}

export type OnListener = StreamListener | StatusUpdateListener | ToolCalledListener;

export interface AgentRunInputs {
  run_id: string;
  session: StoreSession;
  agent: AgentData;
  inputs: Inputs;
  stream: StreamFunc;
}

