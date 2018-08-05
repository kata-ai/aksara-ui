import defaultTheme from './defaultTheme';

export type KataKitDefaultTheme = typeof defaultTheme;

export type ThemeAttributes = {
  backgroundColor: string;
  textColor: string;
  linkColor?: string;
  linkColorHover?: string;
  linkColorActive?: string;
  linkColorOutline?: string;
  headingColor?: string;
  subtleHeadingColor?: string;
  subtleTextColor?: string;
};
