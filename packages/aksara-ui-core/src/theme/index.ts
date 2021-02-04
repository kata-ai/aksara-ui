import { colors, radii, shadows, space } from './foundations';
import { fonts, breakpoints, mediaQueries } from './variables';
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
  componentStyles,
};

export type Theme = typeof theme;
export type ComponentStyles = typeof componentStyles;

export type Color = keyof Theme['colors'];
export type Space = keyof Theme['space'];
export type CardElevation = keyof ComponentStyles['card']['elevation'];
