import * as React from 'react';

import { Theme } from '../../../Theme';
import GlobalStyles from './GlobalStyles';

interface WicaraProviderProps {
  className?: string;
  style?: React.CSSProperties;
  /** Import the provider without any style resets. */
  noReset?: boolean;
}

const WicaraProvider: React.FC<WicaraProviderProps> = ({ children, noReset }) => {
  return (
    <Theme>
      {!noReset && <GlobalStyles />}
      {children}
    </Theme>
  );
};

WicaraProvider.defaultProps = {
  noReset: false
};

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
