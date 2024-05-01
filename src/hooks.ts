import { StreamMessage } from "./agents";

export interface Hooks {
  onStream?: (stream: StreamMessage) => any;
  onToken?: (token: string) => any;
}
