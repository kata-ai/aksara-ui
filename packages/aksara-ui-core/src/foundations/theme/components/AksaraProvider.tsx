import * as React from 'react';

import { Theme } from '../../../Theme';
import GlobalStyles from './GlobalStyles';

const AksaraProvider: React.FC = ({ children }) => {
  return <Theme>{children}</Theme>;
};

AksaraProvider.displayName = 'AksaraProvider';

/**
 * @deprecated This has been replaced by `AksaraProvider`.
 */
export const WicaraProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line no-console
  console.warn('`WicaraProvider` has been deprecated in favour of `AksaraProvider`. Please use that instead.');

  return (
    <AksaraProvider>
      <GlobalStyles />
      {children}
    </AksaraProvider>
  );
};

export default AksaraProvider;
