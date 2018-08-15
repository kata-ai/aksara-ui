export interface PropAttributes {
  name?: string;
  type: string;
  required?: boolean;
  deprecated?: boolean;
  description: string;
  defaultValue?: string;
}

export type PropAttributesMap = Record<string, PropAttributes>;
