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
  agent_name: string;
  run_id: string;
  content: string;
}

export type BoxStreamFunc = (stream: BoxStream) => (undefined | void | unknown);
