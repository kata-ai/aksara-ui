export type ThemeAttributesMap = {
  defaultTheme: ThemeAttributes;
  [color: string]: ThemeAttributes;
};

export type ThemeAttributes = {
  backgroundColor: string;
  textColor: string;
  linkColor?: string;
  linkColorHover?: string;
  linkColorActive?: string;
  linkColorOutline?: string;
  borderColor?: string;
  focusOutlineColor?: string;
  headingColor?: string;
  mutedHeadingColor?: string;
  mutedTextColor?: string;
};
