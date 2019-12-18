import * as React from 'react';

import { Theme } from '../../../Theme';
import GlobalStyles from './GlobalStyles';

interface WicaraProviderProps {
  className?: string;
  style?: React.CSSProperties;
}

const WicaraProvider: React.FC<WicaraProviderProps> = ({ children }) => {
  return (
    <Theme>
      <GlobalStyles />
      {children}
    </Theme>
  );
};

WicaraProvider.displayName = 'WicaraProvider';

/**
 * @deprecated This has been replaced by `WicaraProvider`.
 */
export const WicaraReset: React.FC<WicaraProviderProps> = ({ ...rest }) => {
  // eslint-disable-next-line no-console
  console.warn(
    '`WicaraReset` has been deprecated in favour of `WicaraProvider`. Please use that instead.'
  );

  return <WicaraProvider {...rest} />;
};

export default WicaraProvider;
