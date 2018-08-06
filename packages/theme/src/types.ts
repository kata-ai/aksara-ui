import variables from './utils/variables';

export type KataKitDefaultTheme = typeof variables;

export type ThemeAttributesMap = {
  default: ThemeAttributes;
  [color: string]: ThemeAttributes;
};

export type ThemeAttributes = {
  backgroundColor: string;
  textColor: string;
  linkColor?: string;
  linkColorHover?: string;
  linkColorActive?: string;
  linkColorOutline?: string;
  headingColor?: string;
  mutedHeadingColor?: string;
  mutedTextColor?: string;
};
