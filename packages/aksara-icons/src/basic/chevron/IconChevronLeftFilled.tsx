import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconChevronLeftFilled: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-4.3 12.29a1.002 1.002 0 010 1.42 1 1 0 01-.7.29 1 1 0 01-.7-.29l-4-4a1 1 0 010-1.41l4-4a1.004 1.004 0 011.42 1.42L11.41 12l3.29 3.29z"
      fill={fill}
    />
  </svg>
);

IconChevronLeftFilled.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronLeftFilled;
