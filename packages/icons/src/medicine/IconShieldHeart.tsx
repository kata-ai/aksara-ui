import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconShieldHeart: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 21a13 13 0 008.81-14.58 1.58 1.58 0 00-1-1.22l-5.89-1.9a6.29 6.29 0 00-3.84 0L4.24 5.2a1.58 1.58 0 00-1.05 1.22A13 13 0 0012 21zM8.27 8.84a2.69 2.69 0 013.73 0 2.69 2.69 0 013.73 0 2.51 2.51 0 010 3.62l-3.2 3.11a.77.77 0 01-1.06 0l-3.2-3.11a2.51 2.51 0 010-3.62z"
      fill={fill}
    />
  </svg>
);

IconShieldHeart.defaultProps = {
  ...iconDefaultProps,
};

export default IconShieldHeart;
