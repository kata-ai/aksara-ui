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

/**
 * @deprecated This has been replaced by `AksaraProvider`.
 */
export const WicaraProvider: React.FC<AksaraProviderProps> = ({ children, disableInjection, theme = defaultTheme }) => {
  // eslint-disable-next-line no-console
  console.warn('`WicaraProvider` has been deprecated in favour of `AksaraProvider`. Please use that instead.');

  return (
    <AksaraProvider disableInjection={disableInjection} theme={theme}>
      {children}
    </AksaraProvider>
  );
};

export default AksaraProvider;
