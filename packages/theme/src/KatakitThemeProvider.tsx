import React from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './defaultTheme';

export type KataKitDefaultTheme = typeof defaultTheme;

export interface KataKitThemeProviderProps {
  theme?: KataKitDefaultTheme;
}

export default class KataKitThemeProvider extends React.Component<
  KataKitThemeProviderProps
> {
  render() {
    const { theme, children } = this.props;

    return (
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        {children}
      </ThemeProvider>
    );
  }
}
