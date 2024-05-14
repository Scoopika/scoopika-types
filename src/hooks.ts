import { AgentResponse, StreamMessage, AgentData } from "./agents";
import { LLMToolCall } from "./models";
import { ServerClientActionStream } from "./server_stream";

export interface Hooks {
  onStream?: (stream: StreamMessage) => any;
  onToken?: (token: string) => any;
  onFinish?: (response: AgentResponse) => any;
  onStart?: (info: { run_id: string; session_id: string }) => any;
  onToolCall?: (call: LLMToolCall) => any;
  onToolResult?: (tool: { call: LLMToolCall; result: any }) => any;
  onClientSideAction?: (action: ServerClientActionStream["data"]) => any;
  onError?: (data: { healed?: boolean; error: string }) => any;
  onAgentResponse?: (res: { name: string; response: AgentResponse }) => any;
}

export interface BoxHooks extends Hooks {
  onSelectAgent?: (agent: AgentData) => any;
  onBoxFinish?: (res: { name: string; run: AgentResponse }[]) => any;
}
