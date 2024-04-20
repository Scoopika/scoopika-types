import { Prompt } from "./prompts";
import { ToolSchema } from "./tools";
import { LLMResponse } from "./models";
import { LLMHistory, StoreSession } from "./history";
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
  responses: Record<string, LLMResponse>;
  updated_history: LLMHistory[];
}

export interface AgentRunInputs {
  run_id: string;
  session: StoreSession;
  agent: AgentData;
  inputs: Inputs;
}

export interface AgentResponse {
  run_id: string;
  session_id: string;
  responses: Record<string, LLMResponse>;
}

export interface StreamMessage {
  final?: boolean;
  run_id: string;
  content: string;
}

export interface ToolCalledMessage {
  name: string;
  result: string;
}

export type StreamFunc = (stream: StreamMessage) => undefined;
export type StatusUpdateFunc = (status: string) => undefined;
export type ToolCalledFunc = (data: ToolCalledMessage) => undefined;

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
