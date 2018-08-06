import React from 'react';
import { ThemeProvider } from 'styled-components';

import variables from './utils/variables';
import { KataKitDefaultTheme } from './types';

export interface KataKitThemeProviderProps {
  theme?: KataKitDefaultTheme;
}

export default class KataKitThemeProvider extends React.Component<
  KataKitThemeProviderProps
> {
  render() {
    const { theme, children } = this.props;

    return (
      <ThemeProvider theme={{ ...variables, ...theme }}>
        {children}
      </ThemeProvider>
    );
  }
}
