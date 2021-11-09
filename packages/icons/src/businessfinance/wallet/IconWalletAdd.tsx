import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconWalletAdd: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 12.1V7.33a1.78 1.78 0 00-1.78-1.77H4.67a.89.89 0 110-1.78h9.77a.89.89 0 000-1.78H3.78A1.78 1.78 0 002 3.78v12.44A1.78 1.78 0 003.78 18h8.32a5 5 0 105.9-5.9zm-4.56-2a1 1 0 012 0v2.22a5 5 0 00-2 1.22V10.1zM17 20a3 3 0 110-5.999A3 3 0 0117 20z"
      fill={fill}
    />
    <path
      d="M17.75 16.25v-.85a.75.75 0 10-1.5 0v.85h-.85a.75.75 0 100 1.5h.85v.85a.75.75 0 101.5 0v-.85h.85a.75.75 0 100-1.5h-.85z"
      fill={fill}
    />
  </svg>
);

IconWalletAdd.defaultProps = {
  ...iconDefaultProps,
};

export default IconWalletAdd;
