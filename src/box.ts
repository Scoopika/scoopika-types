import { AgentData } from "./agents";
import { ToolSchema } from "./tools";

export interface BoxData {
  id: string;
  agents: AgentData[];
  tools: ToolSchema[];
  manager: string;
  llm_client: string;
}
