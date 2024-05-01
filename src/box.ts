import { AgentData, AgentResponse } from "./agents";
import { Hooks } from "./hooks";
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

export type BoxStreamFunc = (stream: BoxStream) => (undefined | void | unknown);

export interface BoxHooks extends Hooks {
  onSelectAgent?: (agent: AgentData) => any;
  onBoxFinish?: (res: { name: string; run: AgentResponse }[]) => any;
  onAgentResponse?: (res: {
    name: string;
    response: AgentResponse;
  }) => any;
}
