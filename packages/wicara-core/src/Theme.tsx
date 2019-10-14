import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { colors, space, fonts, typeScale, breakpoints, boxShadow } from './utils';

export const themeProps = {
  colors,
  space,
  fonts,
  typeScale,
  boxShadow,
  breakpoints: [
    `${breakpoints.sm}px`,
    `${breakpoints.md}px`,
    `${breakpoints.lg}px`,
    `${breakpoints.xl}px`
  ]
};

export const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={themeProps}>
      <>{children}</>
    </ThemeProvider>
  );
};

export type Color = keyof typeof themeProps['colors'];
export type Space = keyof typeof themeProps['space'];
export type TypeScale = keyof typeof themeProps['typeScale'];
