import { BoxHooks, Hooks } from "./hooks";
import { Inputs } from "./inputs";

export interface LoadAgentRequest {
  type: "load_agent";
  payload: {
    id: string;
  }
}

export interface LoadBoxRequest {
  type: "load_box";
  payload: {
    id: string;
  }
}

export interface RunAgentRequest {
  type: "run_agent";
  payload: {
    id: string;
    inputs: Inputs;
    hooks: Array<keyof Hooks>;
  }
}

export interface RunBoxRequest {
  type: "run_box";
  payload: {
    id: string;
    inputs: Inputs;
    hooks: Array<keyof BoxHooks>;
  }
}

export interface GetSessionRequest {
  type: "get_session";
  payload: {
    id: string;
    allow_new?: boolean;
  }
}

export interface NewSessionRequest {
  type: "new_session";
  payload: {
    id?: string;
    user_name?: string;
    user_id?: string;
  }
}

export interface DeleteSessionRequest {
  type: "delete_session";
  payload: {
    id: string;
  }
}

export interface GetSessionRunsRequest {
  type: "get_session_runs";
  payload: {
    id: string;
  }
}

export interface ListUserSessionsRequest {
  type: "list_user_sessions";
  payload: {
    id: string;
  }
}

export type ServerRequest = 
  | LoadAgentRequest
  | LoadBoxRequest
  | RunAgentRequest
  | RunBoxRequest
  | GetSessionRequest
  | NewSessionRequest
  | DeleteSessionRequest
  | GetSessionRunsRequest
  | ListUserSessionsRequest
