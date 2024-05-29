import { ToolSchema } from "./tools";

export type Input =
  | string
  | number
  | boolean
  | Array<string | number | boolean>
  | Object;

export type PlugFunc = (context: string) => string | Promise<string>;

export interface LocalAudio {
  type: "local";
  path: string;
}

export interface RemoteAudio {
  type: "remote";
  path: string;
}

export interface FuncAudio {
  type: "function";
  func: (req: Inputs) => string | Promise<string>;
}

export interface BinaryAudio {
  type: "binary";
  binary: Buffer | ArrayBuffer;
}

export type AudioPlug = LocalAudio | RemoteAudio | FuncAudio;

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
