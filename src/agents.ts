import { Prompt } from "./prompts";
import { InTool, ToolSchema } from "./tools";
import { LLMResponse, LLMTextResponse, LLMToolCall } from "./models";
import { LLMHistory, StoreSession } from "./history";
import { Inputs } from "./inputs";

export interface AgentData {
  id: string;
  name: string;
  voice?: string;
  avatar?: string;
  description: string;
  chained: boolean;
  prompts: Prompt[];
  timeout?: number;
  tools: ToolSchema[];
  wanted_responses?: string[];
  in_tools?: InTool[];
}

export interface AgentInnerRunResult {
  responses: {
    prompt_name: string;
    response: LLMResponse;
  }[];
  updated_history: LLMHistory[];
  runs: LLMHistory[];
  tools_history: {
    call: LLMToolCall;
    result: any;
  }[];
}

export interface AgentResponse {
  run_id: string;
  session_id: string;
  response: LLMTextResponse;
}

export interface StreamMessage {
  final?: boolean;
  type: "text" | "image";
  run_id: string;
  content: string;
}

export interface ToolCalledMessage {
  name: string;
  result: string;
}

export type StreamFunc = (stream: StreamMessage) => undefined | void | unknown;
export type StatusUpdateFunc = (status: string) => undefined | void | unknown;
export type ToolCalledFunc = (
  data: ToolCalledMessage,
) => undefined | void | unknown;

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

export type OnListener =
  | StreamListener
  | StatusUpdateListener
  | ToolCalledListener;

export interface AgentRunInputs {
  run_id: string;
  session: StoreSession;
  agent: AgentData;
  inputs: Inputs;
  stream: StreamFunc;
  toolCallStream: (call: LLMToolCall) => any;
  toolResStream: (tool: { call: LLMToolCall; result: any }) => any;
}

export type SpeakLanguages = 
  | "en"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "pl"
  | "tr"
  | "ru"
  | "nl"
  | "cs"
  | "ar"
  | "zh"
  | "hu"
  | "ko"
  | "hi"
