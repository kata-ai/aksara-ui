import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUSB: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 9.77V3a1 1 0 00-1-1H7a1 1 0 00-1 1v6.77A1.21 1.21 0 005 11v2a7 7 0 006 6.92V21a1 1 0 002 0v-1.08A7 7 0 0019 13v-2a1.2 1.2 0 00-1-1.23zm-10 0V4h8v5.72l-8 .05z"
      fill={fill}
    />
    <path
      d="M10 5a1 1 0 00-1 1v1a1 1 0 002 0V6a1 1 0 00-1-1zM14 5a1 1 0 00-1 1v1a1 1 0 002 0V6a1 1 0 00-1-1z"
      fill={fill}
    />
  </svg>
);

IconUSB.defaultProps = {
  ...iconDefaultProps,
};

export default IconUSB;
