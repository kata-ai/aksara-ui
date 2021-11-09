import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconChevronUp: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.71 12.7a1.002 1.002 0 01-1.42 0L12 11.41l-3.29 3.3a1 1 0 01-1.639-.325 1 1 0 01.219-1.095l4-4a1 1 0 011.41 0l4 4a1 1 0 01.01 1.41z"
      fill={fill}
    />
  </svg>
);

IconChevronUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronUp;
