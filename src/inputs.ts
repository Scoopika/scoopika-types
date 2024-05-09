import { ToolSchema } from "./tools";

export type Input =
  | string
  | number
  | boolean
  | Array<string | number | boolean>
  | Object;

export type PlugFunc = (context: string) => string | Promise<string>;

export interface Plug {
  rag?: string | PlugFunc;
  images?: string[];
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
