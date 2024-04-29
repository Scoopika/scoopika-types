
/*
 LLM Clients, responses, are also meant for image generation models,
 so the concept "LLM" means any model that can be run with a prompt somehow. 
*/

import { LLMHistory } from "./history";
import { ImageSize } from "./prompts";
import { Tool, ToolParameters } from "./tools";
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { StreamFunc } from "./agents";

export interface LLMResponseFormat {
  type: "json_object";
  schema: ToolParameters;
}

export interface LLMCompletionBaseInputs {
  model: string;
  messages: LLMHistory[];
  response_format?: LLMResponseFormat;
  tools?: Tool[];
  tool_choice?: string;
  options?: Record<string, any>;
}

export interface LLMCompletionToolsInputs extends LLMCompletionBaseInputs {
  tools: Tool[];
}

export type LLMCompletionInputs = LLMCompletionBaseInputs | LLMCompletionToolsInputs;

export interface LLMFunctionBaseInputs {
  model: string;
  tools: Tool[];
  messages: LLMHistory[];
  tool_choice?: string;
  response_format?: {
    type: "json_object";
    schema: ToolParameters;
  };
  options: Record<string, any>;
}

export interface LLMFunctionImageInputs {
  model: string;
  prompt: string;
  n: number;
  size?: ImageSize;
}

export interface LLMToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string;
  };
}

export interface LLMTextResponse {
  type: "text";
  content: string;
  tool_calls?: LLMToolCall[];
  follow_up_history?: any[];
}

export interface LLMImageResponse {
  type: "image";
  content: string[];
}

export interface LLMJsonResponse {
  type: "object";
  content: Record<string, any>;
}

export type LLMResponse = LLMTextResponse | LLMImageResponse | LLMJsonResponse;

export type AllEngines = "openai" | "google" | "together" | "fireworks";

export type RawEngines = Partial<{
  [key in AllEngines]: string
}>

export interface OpenAIClient {
  host: "openai" | "together" | "fireworks";
  client: OpenAI;
}

export interface GoogleClient {
  host: "google";
  client: GoogleGenerativeAI;
}

export type LLMClient = OpenAIClient | GoogleClient;
export type LLMHosts = OpenAI | GoogleGenerativeAI;

export interface LLMHost<Client> {
  helpers: Record<string, Function>;
  model_role: "assistant" | "model";
  system_role: "user" | "system";
  allow_vision?: string[];
  text: (
    prompt_name: string,
    run_id: string,
    client: Client,
    stream: StreamFunc,
    inputs: LLMFunctionBaseInputs,
  ) => Promise<LLMTextResponse>;
  image: (client: Client, inputs: LLMFunctionImageInputs) => Promise<LLMResponse>;
  json: (
    client: Client,
    inputs: LLMFunctionBaseInputs,
    schema: ToolParameters,
  ) => Promise<LLMJsonResponse>;
}
