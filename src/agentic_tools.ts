export type AgenticToolOptionType = "string" | "number" | "secret";
export type AgenticToolOptionValueType = string | number;

// Schema

export interface AgenticToolSchemaOptions {
  id: string;
  type: AgenticToolOptionType;
  value: AgenticToolOptionValueType;
}

export interface AgenticToolSchema {
  id: string;
  options: AgenticToolSchemaOptions[];
  methods: string[];
}

// Platform

export interface AgenticToolMethod {
  id: string;
  name: string;
  description: string;
}

export interface AgenticToolItemOptions {
  id: string;
  index: number;
  name: string;
  type: AgenticToolOptionType;
  description?: string;
  placeholder: string;
  default?: string | number;
  env?: string;
  optional?: boolean;
}

export interface AgenticToolItemLinks {
  name: string;
  url: string;
}

export interface AgenticToolItem {
  id: string;
  name: string;
  img: string;
  description: string;
  links: AgenticToolItemLinks[];
  tags: string[];
  methods: AgenticToolMethod[];
  options: AgenticToolItemOptions[];
}
