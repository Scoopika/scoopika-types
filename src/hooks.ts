import { AgentResponse, StreamMessage } from "./agents";

export interface Hooks {
  onStream?: (stream: StreamMessage) => any;
  onToken?: (token: string) => any;
  onFinish?: (response: AgentResponse) => any;
  onStart?: (run_id: string) => any;
}
