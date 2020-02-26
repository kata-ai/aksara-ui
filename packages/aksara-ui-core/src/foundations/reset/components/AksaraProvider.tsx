import * as React from 'react';

import { Theme } from '../../../Theme';
import GlobalStyles from './GlobalStyles';

export interface AksaraProviderProps {
  className?: string;
  style?: React.CSSProperties;
}

const AksaraProvider: React.FC<AksaraProviderProps> = ({ children }) => {
  return (
    <Theme>
      <GlobalStyles />
      {children}
    </Theme>
  );
};

AksaraProvider.displayName = 'AksaraProvider';

/**
 * @deprecated This has been replaced by `AksaraProvider`.
 */
export const WicaraProvider: React.FC<AksaraProviderProps> = ({ ...rest }) => {
  // eslint-disable-next-line no-console
  console.warn('`WicaraReset` has been deprecated in favour of `WicaraProvider`. Please use that instead.');

  return <AksaraProvider {...rest} />;
};

export default AksaraProvider;
