import { AgentData, AgentResponse, AudioRes, StreamMessage } from "./agents";
import { LLMToolCall } from "./models";

export interface ServerBaseStream {
  type: "stream";
  data: StreamMessage;
}

export interface ServerStartStream {
  type: "start";
  data: {
    run_id: string;
    session_id: string;
  };
}

export interface ServerTokenStream {
  type: "token";
  data: string;
}

export interface ServerResponseStream {
  type: "response";
  data: AgentData;
}

export interface ServerToolCallStream {
  type: "tool_call";
  data: LLMToolCall;
}

export interface ServerToolResStream {
  type: "tool_result";
  data: {
    call: LLMToolCall;
    result: any;
  };
}

export interface ServerAgentStream {
  type: "select_agent";
  data: {
    name: string;
    response: AgentResponse;
  };
}

export interface ServerAgentResponseStream {
  type: "agent_response";
  data: {
    name: string;
    response: AgentResponse;
  };
}

export interface ServerBoxResponseStream {
  type: "box_response";
  data: {
    name: string;
    run: AgentResponse;
  }[];
}

export interface ServerEndStream {
  type: "end";
  data: any;
}

export interface ServerErrorStream {
  type: "error";
  data: {
    headled?: boolean;
    error: string;
  };
}

export interface ServerClientActionStream {
  type: "client_action";
  data: {
    id: string;
    tool_name: string;
    arguments: Record<string, any>;
  };
}

export interface ServerAudioStream {
  type: "audio";
  data: AudioRes;
}

export type ServerStream =
  | ServerBaseStream
  | ServerStartStream
  | ServerTokenStream
  | ServerResponseStream
  | ServerToolCallStream
  | ServerToolResStream
  | ServerAgentStream
  | ServerAgentResponseStream
  | ServerBoxResponseStream
  | ServerEndStream
  | ServerErrorStream
  | ServerClientActionStream
  | ServerAudioStream;
