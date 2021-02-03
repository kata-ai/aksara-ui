import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import deepmerge from 'deepmerge';

import { theme as defaultTheme, Theme } from '../../theme';
import GlobalStyles from './GlobalStyles';

export interface AksaraProviderProps {
  theme?: Partial<Theme>;
}

const AksaraProvider: React.FC<AksaraProviderProps> = ({ children, theme = {} }) => {
  const mergedTheme = React.useMemo(() => deepmerge(defaultTheme, theme), [theme]);

  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
};

AksaraProvider.displayName = 'AksaraProvider';

/**
 * @deprecated This has been replaced by `AksaraProvider`.
 */
export const WicaraProvider: React.FC<AksaraProviderProps> = ({ children, theme }) => {
  // eslint-disable-next-line no-console
  console.warn('`WicaraProvider` has been deprecated in favour of `AksaraProvider`. Please use that instead.');

  return (
    <AksaraProvider theme={theme}>
      <GlobalStyles />
      {children}
    </AksaraProvider>
  );
};

export default AksaraProvider;
