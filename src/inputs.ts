export type Input = string | number | boolean | Array<string | number | boolean>;

export type Inputs = Record<string, Input> & {
  message?: string;
  plug?: {
    rag?: string | ((context: string) => string | Promise<string>);
    images?: string[];
  }
};
