import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconWallet4: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 7H6a1 1 0 010-2h11a1 1 0 100-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2zm-1 9a1 1 0 01-2 0v-3.94a1 1 0 012 0V16z"
      fill={fill}
    />
  </svg>
);

IconWallet4.defaultProps = {
  ...iconDefaultProps,
};

export default IconWallet4;
