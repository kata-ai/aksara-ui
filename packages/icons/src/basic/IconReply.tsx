import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconReply: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16 9.5H6.41l4.3-4.29a1.004 1.004 0 00-1.42-1.42l-6 6a1.15 1.15 0 00-.21.33 1 1 0 000 .76c.05.121.122.233.21.33l6 6a.998.998 0 001.42 0 1 1 0 000-1.42l-4.3-4.29H16a3 3 0 013 3v5a1 1 0 102 0v-5a5 5 0 00-5-5z"
      fill={fill}
    />
  </svg>
);

IconReply.defaultProps = {
  ...iconDefaultProps,
};

export default IconReply;
