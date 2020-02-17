import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconChevronDown: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.286 16.7a1 1 0 001.42 0l7.996-7.992a1.003 1.003 0 10-1.42-1.418l-7.286 7.292L4.709 7.29a1.003 1.003 0 00-1.42 1.418l7.997 7.992z"
      fill={fill}
    />
  </svg>
);

IconChevronDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronDown;
