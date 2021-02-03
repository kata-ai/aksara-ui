import { colors, space, fonts, typeScale, elevation, breakpoints, mediaQueries, shadows, radii } from './variables';
import { componentStyles } from './componentStyles';

export const theme = {
  // Default styled-system theme props based on the theme specification:
  // https://styled-system.com/theme-specification
  colors,
  space,
  sizes: space,
  fonts,
  shadows,
  radii,
  breakpoints,
  mediaQueries,

  // Custom theme props based on custom component variants.
  typeScale,
  elevation,
  componentStyles,
};

export type Theme = typeof theme;
export type ComponentStyles = typeof componentStyles;

export type Color = keyof Theme['colors'];
export type Space = keyof Theme['space'];
export type Elevation = keyof Theme['elevation'];
export type TypeScale = keyof Theme['typeScale'];
export type CardElevation = keyof ComponentStyles['card'];
export type TextScale = keyof ComponentStyles['text'];
export type ParagraphScale = keyof ComponentStyles['paragraph'];
export type HeadingScale = keyof ComponentStyles['heading'];
