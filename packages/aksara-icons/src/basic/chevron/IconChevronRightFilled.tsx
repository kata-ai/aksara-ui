import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconChevronRightFilled: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-4.29 9.7l-4 4a1.002 1.002 0 01-1.639-.325 1 1 0 01.219-1.095l3.3-3.28L9.3 8.71a1 1 0 111.41-1.42l4 4a1 1 0 010 1.41z"
      fill={fill}
    />
  </svg>
);

IconChevronRightFilled.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronRightFilled;
