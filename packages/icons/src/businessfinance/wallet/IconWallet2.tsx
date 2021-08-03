import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconWallet2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.62 5H4.38A2.36 2.36 0 002 7.33v9.34A2.36 2.36 0 004.38 19h15.24A2.36 2.36 0 0022 16.67V7.33A2.36 2.36 0 0019.62 5zm.38 9h-8.29l-1.79-1.72a1 1 0 00-.69-.28H4v-1h16v3zM4 7.33A.36.36 0 014.38 7h15.24a.36.36 0 01.38.33V9H4V7.33z"
      fill={fill}
    />
  </svg>
);

IconWallet2.defaultProps = {
  ...iconDefaultProps,
};

export default IconWallet2;
