import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconChevronDownRounded: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.71 8.71l-4 4a1 1 0 01-1.41 0l-4-4a1.001 1.001 0 011.41-1.42l3.3 3.3 3.28-3.29a1 1 0 111.42 1.41z"
      fill={fill}
    />
  </svg>
);

IconChevronDownRounded.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronDownRounded;
