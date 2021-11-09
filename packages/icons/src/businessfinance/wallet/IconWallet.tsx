import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconWallet: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.67 3H5.33A2.34 2.34 0 003 5.33v13.34A2.34 2.34 0 005.33 21h13.34A2.34 2.34 0 0021 18.67V5.33A2.34 2.34 0 0018.67 3zM5 5.33A.33.33 0 015.33 5h13.34a.33.33 0 01.33.33V7H5V5.33zM19 11h-3a1.05 1.05 0 00-.71.29l-1 1H9.75l-1-1A1 1 0 008 11H5V9h14v2z"
      fill={fill}
    />
  </svg>
);

IconWallet.defaultProps = {
  ...iconDefaultProps,
};

export default IconWallet;
