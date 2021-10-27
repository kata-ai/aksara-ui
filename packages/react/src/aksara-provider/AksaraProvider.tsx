import * as React from 'react';
import { IdProvider } from '@radix-ui/react-id';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from '../components/toast/internals';

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
      <IdProvider>
        <ToastProvider>
          {!disableInjection && <GlobalStyles />}
          {children}
        </ToastProvider>
      </IdProvider>
    </ThemeProvider>
  );
};

AksaraProvider.displayName = 'AksaraProvider';

export default AksaraProvider;
