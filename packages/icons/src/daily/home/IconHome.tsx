import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconHome: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 7.14l-7-3.89a2 2 0 00-1.94 0L4 7.14a2 2 0 00-1 1.75V19a2 2 0 002 2h3a1 1 0 001-1v-2a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 001 1h3a2 2 0 002-2V8.89a2 2 0 00-1-1.75z"
      fill={fill}
    />
  </svg>
);

IconHome.defaultProps = {
  ...iconDefaultProps,
};

export default IconHome;
