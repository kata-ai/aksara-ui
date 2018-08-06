export type ThemeAttributesMap = {
  defaultTheme: ThemeAttributes;
  [color: string]: ThemeAttributes;
};

export type ThemeAttributes = {
  backgroundColor: string;
  backgroundColorHover?: string;
  backgroundColorActive?: string;
  textColor: string;
  linkColor?: string;
  linkColorHover?: string;
  linkColorActive?: string;
  linkColorOutline?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorActive?: string;
  focusOutlineColor?: string;
  headingColor?: string;
  mutedHeadingColor?: string;
  mutedTextColor?: string;
};
