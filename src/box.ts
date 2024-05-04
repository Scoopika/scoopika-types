import { AgentData } from "./agents";
import { ToolSchema } from "./tools";

export interface BoxData {
  id: string;
  agents: AgentData[];
  tools: ToolSchema[];
  manager: string;
  llm_client: string;
}

export interface BoxStream {
  type: "text" | "image";
  agent_name: string;
  prompt_name: string;
  run_id: string;
  content: string;
}

export type BoxStreamFunc = (stream: BoxStream) => undefined | void | unknown;
