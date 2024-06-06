import { AgentResponse, StreamMessage, AgentData, AudioRes } from "./agents";
import { LLMToolCall } from "./models";
import { ServerClientActionStream } from "./server_stream";

type HookFunc<Data> = (data: Data) => any;

export interface Hooks {
  onStream?: HookFunc<StreamMessage>;
  onOutput?: HookFunc<StreamMessage>;
  onToken?: HookFunc<string>;
  onAudio?: HookFunc<AudioRes>;
  onFinish?: HookFunc<AgentResponse>;
  onStart?: HookFunc<{run_id: string; session_id: string}>;
  onToolCall?: HookFunc<LLMToolCall>;
  onToolResult?: HookFunc<{call: LLMToolCall; result: any}>;
  onClientSideAction?: HookFunc<ServerClientActionStream["data"]>
  onError?: HookFunc<{healed: boolean; error: string}>;
  onAgentResponse?: HookFunc<
    {name: string; response: AgentResponse}
  >;
}

export interface BoxHooks extends Hooks {
  onSelectAgent?: HookFunc<AgentData>;
  onBoxFinish?: HookFunc<
    { name: string; run: AgentResponse }[]
  >;
}

export type HookArrays = {
  [K in keyof BoxHooks]: BoxHooks[K][];
}

export interface HooksClass {
  hooks: HookArrays;
  addHook: <K extends keyof BoxHooks>(
    type: K, func: BoxHooks[K]
  ) => void;
  executeHooks: <K extends keyof BoxHooks>(
    key: K,
    data: Parameters<NonNullable<BoxHooks[K]>>[0]
  ) => void;
}
