import { AgentData, AgentResponse, StreamMessage } from "./agents";
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
  }
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
  }
}

export interface ServerAgentStream {
  type: "select_agent";
  data: AgentData;
}

export interface ServerBoxResponseStream {
  type: "box_response";
  data: {
    name: string;
    run: AgentResponse;
  }[];
}

export interface ServerResponseAction {
  type: "end";
  data: any;
}
