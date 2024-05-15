import { BoxHooks } from "./hooks";
import { Inputs } from "./inputs";

export interface LoadRequest {
  method: "get";
  resource: "agent" | "box";
  payload: {
    id: string;
  }
}

export interface RunRequest {
  method: "post";
  resource: "agent" | "box";
  payload: {
    id: string;
    inputs: Inputs;
    hooks: Array<keyof BoxHooks>;
  }
}

export interface GetSessionRequest {
  method: "get";
  resource: "session";
  payload: {
    id: string;
    allow_new?: boolean;
  }
}

export interface NewSessionRequest {
  method: "post";
  resource: "session";
  payload: {
    id?: string;
    user_name?: string;
    user_id?: string;
  }
}

export interface DeleteSessionRequest {
  method: "delete";
  resource: "session";
  payload: {
    id: string;
  }
}

export interface GetSessionRunsRequest {
  method: "post";
  resource: "session_runs";
  payload: {
    id: string;
  }
}

export interface ListUserSessionsRequest {
  method: "get";
  resource: "user_sessions";
  payload: {
    id: string;
  }
}

export type ServerRequest = 
  | LoadRequest
  | RunRequest
  | GetSessionRequest
  | NewSessionRequest
  | DeleteSessionRequest
  | GetSessionRunsRequest
  | ListUserSessionsRequest
