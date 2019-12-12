import * as React from 'react';

import { Theme } from '../../../Theme';
import GlobalStyles from './GlobalStyles';

interface ResetProps {
  className?: string;
  style?: React.CSSProperties;
  /** Import the provider without any style resets. */
  noReset?: boolean;
}

const WicaraProvider: React.FC<ResetProps> = ({ children, noReset }) => {
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
export const WicaraReset = WicaraProvider;

export default WicaraProvider;
