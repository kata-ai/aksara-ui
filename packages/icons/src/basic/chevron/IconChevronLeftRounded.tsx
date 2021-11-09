import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconChevronLeftRounded: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm2.71 14.71a1.002 1.002 0 01-1.42 0l-4-4a1 1 0 010-1.41l4-4a1 1 0 111.41 1.42L11.41 12l3.3 3.29a1.002 1.002 0 010 1.42z"
      fill={fill}
    />
  </svg>
);

IconChevronLeftRounded.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronLeftRounded;
