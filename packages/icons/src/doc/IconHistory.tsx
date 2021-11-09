import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconHistory: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 15.998h2.09A5.786 5.786 0 0011.35 19H5a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v6.35a5.96 5.96 0 00-2-.35v-.002a1.001 1.001 0 00-1-1H9a1 1 0 000 2h4.694a6.04 6.04 0 00-1.88 2H9a1 1 0 000 2zm7-10H9a1 1 0 000 2h7a1 1 0 100-2zM5.443 15.83a1.001 1.001 0 101.111-1.666 1.001 1.001 0 00-1.11 1.666zm0-4a1.001 1.001 0 101.111-1.666 1.001 1.001 0 00-1.11 1.666zm0-4a1.001 1.001 0 101.111-1.666 1.001 1.001 0 00-1.11 1.666zm14.883 6.947a4 4 0 11-6.653 4.444 4 4 0 016.653-4.444zM17 18h1.474a1 1 0 100-2H18v-1a1 1 0 10-2 0v2a1 1 0 001 1z"
      fill={fill}
    />
  </svg>
);

IconHistory.defaultProps = {
  ...iconDefaultProps,
};

export default IconHistory;
