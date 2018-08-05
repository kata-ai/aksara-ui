import defaultTheme from './defaultTheme';

export type KataKitDefaultTheme = typeof defaultTheme;

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
  subtleHeadingColor?: string;
  subtleTextColor?: string;
};
