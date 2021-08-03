import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconHomeWFH: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 7.14l-7-3.89a2 2 0 00-1.94 0L4 7.14a2 2 0 00-1 1.75V19a2 2 0 002 2h3a1 1 0 001-1 1 1 0 011-1h4a1 1 0 011 1 1 1 0 001 1h3a2 2 0 002-2V8.89a2 2 0 00-1-1.75zM7 9a1 1 0 011-1h8a1 1 0 011 1v5H7V9zm11 7a1 1 0 01-1 1H7a1 1 0 01-1-1v-.9a.09.09 0 01.1-.1h11.8a.091.091 0 01.074.026.089.089 0 01.026.074v.9z"
      fill={fill}
    />
  </svg>
);

IconHomeWFH.defaultProps = {
  ...iconDefaultProps,
};

export default IconHomeWFH;
