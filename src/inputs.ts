import { ToolSchema } from "./tools";

export type Input =
  | string
  | number
  | boolean
  | Array<string | number | boolean>
  | Object;

export type PlugFunc = (context: string) => string | Promise<string>;

export interface Base64Audio {
  type: "base64";
  value: string;
}

export interface RemoteAudio {
  type: "remote";
  path: string;
}

export interface FuncAudio {
  type: "function";
  func: (req: Inputs) => string | Promise<string>;
}

export type AudioPlug = Base64Audio | RemoteAudio | FuncAudio;

export interface Plug {
  rag?: string | PlugFunc;
  images?: string[];
  audio?: AudioPlug[];
  data?: {
    description: string;
    data: string;
  }[];
}

export type Inputs = Record<string, Input> & {
  tools?: ToolSchema[];
  message?: string;
  session_id?: string;
  run_id?: string;
  save_history?: boolean;
  plug?: Plug;
};

export interface RunInputs {
  message?: string;
  audio?: AudioPlug[];
  images?: string[];
  urls?: string[];
  context?: {
    description: string;
    value: string;
    scope: "session" | "run";
  }[];
}

export interface RunOptions {
  tools?: ToolSchema[];
  session_id?: string;
  run_id?: string;
  save_history?: boolean;
  max_tools?: number;
  voice?: boolean;
}
