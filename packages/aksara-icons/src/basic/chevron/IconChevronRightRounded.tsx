import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconChevronRightRounded: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm2.71 10.71l-4 4A1 1 0 0110 17a1 1 0 01-.71-1.71l3.3-3.29-3.3-3.29a1.004 1.004 0 011.42-1.42l4 4a1.002 1.002 0 010 1.42z"
      fill={fill}
    />
  </svg>
);

IconChevronRightRounded.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronRightRounded;
