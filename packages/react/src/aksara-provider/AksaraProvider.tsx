import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme as defaultTheme, Theme } from '../theme';
import injectGlobalStyles from './injectGlobalStyles';

export interface AksaraProviderProps {
  /**
   * If you want to extend the global styles set to `true` and inject them
   * manually via `injectGlobalStyles`.
   */
  disableInjection?: boolean;
  /** Custom theme object. */
  theme?: Theme;
}

const { GlobalStyles } = injectGlobalStyles();

const AksaraProvider: React.FC<AksaraProviderProps> = ({ children, disableInjection, theme = defaultTheme }) => {
  return (
    <ThemeProvider theme={theme}>
      {!disableInjection && <GlobalStyles />}
      {children}
    </ThemeProvider>
  );
};

AksaraProvider.displayName = 'AksaraProvider';

export default AksaraProvider;
