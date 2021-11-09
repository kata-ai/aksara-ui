import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBoxEmpty: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 21h14a2 2 0 002-2V9a1 1 0 00-.07-.37l-1.75-4.37A2 2 0 0017.32 3H6.68a2 2 0 00-1.86 1.26L3.07 8.63A1 1 0 003 9v10a2 2 0 002 2zm11-8a4 4 0 11-8 0v-1a1 1 0 112 0v1a2 2 0 004 0v-1a1 1 0 012 0v1zM6.68 5h10.64l1.6 4H5.08l1.6-4z"
      fill={fill}
    />
  </svg>
);

IconBoxEmpty.defaultProps = {
  ...iconDefaultProps,
};

export default IconBoxEmpty;
