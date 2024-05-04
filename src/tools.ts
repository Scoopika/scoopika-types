import { Parameter } from "./parameters";
import { Prompt } from "./prompts";

export interface ToolParameters {
  type: "object";
  properties: Record<string, Parameter>;
  required?: Array<string>;
}

export interface ToolFunction {
  name: string;
  description: string;
  parameters: ToolParameters;
}

export interface Tool {
  type: "function";
  function: ToolFunction;
}

export interface FunctionToolSchema {
  type: "function";
  executor: (inputs: Record<string, any>) => any | Promise<any>;
  tool: Tool;
}

export interface ApiToolSchema {
  type: "api";
  url: string;
  method: "get" | "post" | "delete" | "post" | "patch" | "put";
  headers: Record<string, string>;
  tool: Tool;
}

export interface SubpromptToolSchema {
  type: "subprompt";
  prompt: Prompt;
  tool: Tool;
}

export type ToolSchema =
  | FunctionToolSchema
  | ApiToolSchema
  | SubpromptToolSchema;
