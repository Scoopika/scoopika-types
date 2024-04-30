export type Input = string | number | boolean | Array<string | number | boolean> | Object;

export type PlugFunc = (context: string) => (string | Promise<string>);

export interface Plug {
  rag?: string | PlugFunc;
  images?: string[];
};

export type Inputs = Record<string, Input> & {
  message?: string;
  session_id?: string;
  plug?: Plug;
};
