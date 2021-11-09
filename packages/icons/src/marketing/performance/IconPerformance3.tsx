import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPerformance3: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 10a1 1 0 11-2 0v-1a1 1 0 112 0v1zm3 0a1 1 0 01-2 0v-3a1 1 0 012 0v3zm3 0a1 1 0 01-2 0V8a1 1 0 012 0v5zM13 19h-2a1 1 0 01-1 1H8a1 1 0 000 2h8a1 1 0 000-2h-2a1 1 0 01-1-1z"
      fill={fill}
    />
  </svg>
);

IconPerformance3.defaultProps = {
  ...iconDefaultProps,
};

export default IconPerformance3;
