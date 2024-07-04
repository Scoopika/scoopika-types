import { JSONSchema } from "openai/lib/jsonschema";
import { AudioRes } from "./agents";
import { StoreSession } from "./history";
import { BoxHooks, Hooks } from "./hooks";
import { RunInputs, RunOptions } from "./inputs";

export interface LoadAgentRequest {
  type: "load_agent";
  payload: {
    id: string;
  };
}

export interface LoadBoxRequest {
  type: "load_box";
  payload: {
    id: string;
  };
}

export interface RunAgentRequest {
  type: "run_agent";
  payload: {
    id: string;
    inputs: RunInputs;
    options?: RunOptions;
    hooks: Array<keyof Hooks>;
  };
}

export interface RunBoxRequest {
  type: "run_box";
  payload: {
    id: string;
    inputs: RunInputs;
    options?: RunOptions;
    hooks: Array<keyof BoxHooks>;
  };
}

export interface GetSessionRequest {
  type: "get_session";
  payload: {
    id: string;
    allow_new?: boolean;
  };
}

export interface NewSessionRequest {
  type: "new_session";
  payload: {
    id?: string;
    user_name?: string;
    user_id?: string;
  };
}

export interface DeleteSessionRequest {
  type: "delete_session";
  payload: {
    id: string;
  };
}

export interface GetSessionRunsRequest {
  type: "get_session_runs";
  payload: {
    id: string;
  };
}

export interface ListUserSessionsRequest {
  type: "list_user_sessions";
  payload: {
    id: string;
  };
}

export interface GetRunRequest {
  type: "get_run";
  payload: {
    session: StoreSession | string;
    run_id: string;
    role?: "agent" | "user";
  }
}

export interface ReadAudioRequest {
  type: "read_audio";
  payload: AudioRes | string;
}

export interface GenerateJSONRequest {
  type: "generate_json";
  payload: {
    id: string;
    inputs: RunInputs;
    options?: RunOptions;
    schema: JSONSchema;
    system_prompt?: string;
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
  | GetRunRequest
  | ReadAudioRequest
  | GenerateJSONRequest;
