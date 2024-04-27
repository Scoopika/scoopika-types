import type { ParameterBase } from "./parameters";

export interface PromptInput extends ParameterBase {
  id: string;
}

export interface BasePrompt {
  id: string;
  index: number;
  variable_name: string;
  description?: string;
  llm_client: string;
  model: string;
  type: "text" | "json";
  options: Record<string, any>;
  tool_choice?: string;
  conversational?: boolean;
  inputs: PromptInput[];
  content: string;
}

export type ImageSize =
  | "265x265"
  | "512x512"
  | "1024x1024"
  | "1792x1024"
  | "1792x1024"
  | null
  | undefined;

export interface ImagePrompt {
  id: string;
  index: number;
  variable_name: string;
  description?: string;
  llm_client: string;
  model: string;
  options: Record<string, any>;
  tool_choice?: string;
  conversational?: boolean;
  inputs: PromptInput[];
  content: string;
  type: "image";
  n: number;
  size: ImageSize;
}

export type Prompt = BasePrompt | ImagePrompt;

export interface BuiltPrompt {
  missing: PromptInput[];
  content: string;
}
