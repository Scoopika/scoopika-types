import { AgentData } from "./agents";
import { ToolSchema } from "./tools";

export interface Box {
  id: string;
  agents: AgentData[];
  tools: ToolSchema[];
  manager: string;
  llm_client: string;
}
