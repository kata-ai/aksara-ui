import colors, { Colors } from './colors';
import radii, { Radii } from './radii';
import responsive, { Breakpoints, MediaQueries } from './responsive';
import shadows, { Shadows } from './shadows';
import space, { Space } from './space';
import typography, { Fonts, FontSizes, LetterSpacings, LineHeights } from './typography';

export type Foundations = {
  colors: Colors;
  space: Space;
  sizes: Space;
  fonts: Fonts;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
  letterSpacings: LetterSpacings;
  shadows: Shadows;
  radii: Radii;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
};

export type { Colors, Space, Fonts, FontSizes, LineHeights, LetterSpacings, Shadows, Radii, Breakpoints, MediaQueries };

/**
 * Default styled-system theme props based on the theme specification.
 *
 * [Theme specification](https://styled-system.com/theme-specification)
 */
const foundations: Foundations = {
  colors,
  space,
  sizes: space,
  ...typography,
  shadows,
  radii,
  ...responsive,
};

export default foundations;
