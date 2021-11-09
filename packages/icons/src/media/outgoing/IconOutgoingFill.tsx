import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconOutgoingFill: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 0H2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2zm-1 12a1 1 0 01-2 0V6.41l-9.29 9.3a1 1 0 01-1.639-.325 1 1 0 01.219-1.095L13.59 5H7a1 1 0 010-2h9a1 1 0 01.38.08 1 1 0 01.54.54c.051.12.078.25.08.38v8z"
      fill={fill}
    />
    <path d="M16.92 3.62a1 1 0 00-.54-.54c.121.05.233.122.33.21.088.097.16.209.21.33z" fill={fill} />
  </svg>
);

IconOutgoingFill.defaultProps = {
  ...iconDefaultProps,
};

export default IconOutgoingFill;
