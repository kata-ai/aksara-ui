import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCoinBitcoin: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.25 12.14A2.89 2.89 0 0112.39 17v.68a.75.75 0 11-1.5 0V17H9.5a.76.76 0 01-.75-.75V7.71A.76.76 0 019.5 7h1.39v-.71a.75.75 0 111.5 0V7a2.88 2.88 0 011.89 5 2.87 2.87 0 01.97 2.14z"
      fill={fill}
    />
    <path
      d="M12.36 12.75h-2.11v2.79h2.11a1.4 1.4 0 000-2.79zM12.36 8.46h-2.11v2.79h2.11a1.4 1.4 0 000-2.79z"
      fill={fill}
    />
  </svg>
);

IconCoinBitcoin.defaultProps = {
  ...iconDefaultProps,
};

export default IconCoinBitcoin;
