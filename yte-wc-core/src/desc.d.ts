import { TemplateResult } from 'lit';

export interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

export interface ArgTypesEntry {
  control: String;
  options?: Array<string>;
}

export type ArgTypes<Type> = {
  [Property in keyof Type]: ArgTypesEntry;
};

export interface StorybookDefaultExport<Args> {
  title: String;
  args: Args;
  argTypes: ArgTypes<Args>;
}
