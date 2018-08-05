import variables from './utils/variables';

export type KataKitDefaultTheme = typeof variables;

export type ThemeValue = string;
export type ThemeModeAttributes = { [mode: string]: ThemeValue };
export type ThemeModeProps = { mode: string };
export type ThemeProps = { theme: ThemeModeProps };

export type ThemeAttributes = {
  backgroundColor: string;
  textColor: string;
  linkColor?: string;
  linkColorHover?: string;
  linkColorActive?: string;
  linkColorOutline?: string;
  headingColor?: string;
};
