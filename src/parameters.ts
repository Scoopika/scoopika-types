export interface ParameterBase {
  description?: string;
  enum?: any[];
  type: "string" | "boolean" | "number";
  default?: any;
  important?: boolean;
  required?: boolean;
}

export interface ArrayParameter {
  description?: string;
  enum?: any[];
  type: "array";
  default?: any;
  important?: boolean;
  required?: boolean;
  items: { type: string };
}

export interface ObjectParameter {
  type: "object";
  description?: string;
  enum?: any[];
  default?: any;
  important?: boolean;
  properties: Record<string, ParameterBase | ArrayParameter | ObjectParameter>;
  required?: string[];
}

export type Parameter = ParameterBase | ArrayParameter | ObjectParameter;
