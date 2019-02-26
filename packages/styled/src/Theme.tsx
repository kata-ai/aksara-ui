import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { breakpoints, spacing, colors, fontSizes } from './utils/variables';

export const themeProps = {
  colors,
  breakpoints: [breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl],
  space: Object.values(spacing).map(e => e),
  fontSizes: Object.values(fontSizes).map(e => e)
};

/** ThemeProvider wrapper. */
export const WicaraThemeProvider: React.FC = props => {
  return <ThemeProvider theme={themeProps}>{props.children}</ThemeProvider>;
};

/** Spacing units as union type. */
export type SpacingUnits = keyof typeof themeProps['space'];
/** Color keys as union type. */
export type Colors = keyof typeof themeProps['colors'];
/** Grid breakpoints as union type. */
export type Breakpoints = keyof typeof breakpoints;
