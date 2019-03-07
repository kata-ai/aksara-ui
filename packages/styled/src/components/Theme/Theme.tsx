import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { breakpoints, space, colors, fontSizes } from '../../utils';

export const themeProps = {
  colors,
  space,
  breakpoints: [breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl],
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
