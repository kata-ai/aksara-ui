import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconChevronUpFilled: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2.29 11.71a1.002 1.002 0 01-1.42 0L12 11.41 8.71 14.7a1.004 1.004 0 11-1.42-1.42l4-4a1 1 0 011.41 0l4 4a1 1 0 01.01 1.43z"
      fill={fill}
    />
  </svg>
);

IconChevronUpFilled.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronUpFilled;
