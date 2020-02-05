import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  colors,
  space,
  fonts,
  typeScale,
  elevation,
  breakpoints,
  mediaQueries,
  shadows,
  radii,
  componentStyles
} from './utils';

export const themeProps = {
  // Default styled-system theme props based on the theme specification:
  // https://styled-system.com/theme-specification
  colors,
  space,
  fonts,
  shadows,
  radii,
  breakpoints,
  mediaQueries,

  // Custom theme props based on custom component variants.
  typeScale,
  elevation,
  componentStyles
};

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={themeProps}>{children}</ThemeProvider>;
};

export type Color = keyof typeof themeProps['colors'];
export type Space = keyof typeof themeProps['space'];
export type Elevation = keyof typeof themeProps['elevation'];
export type TypeScale = keyof typeof themeProps['typeScale'];
export type TextScale = keyof typeof themeProps.componentStyles.text;
export type ParagraphScale = keyof typeof themeProps.componentStyles.paragraph;
export type HeadingScale = keyof typeof themeProps.componentStyles.heading;
