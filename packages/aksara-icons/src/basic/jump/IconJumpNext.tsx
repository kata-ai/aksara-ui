import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconJumpNext: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.615 20.919a.998.998 0 01-.325-.219 1 1 0 010-1.419l7.294-7.286L4.29 4.71a1.004 1.004 0 011.419-1.42l7.994 7.996a1 1 0 010 1.42L5.709 20.7a.998.998 0 01-1.094.219zm6.38-17.923c.266 0 .521.106.71.294l7.994 7.995a1 1 0 010 1.42L11.704 20.7a.999.999 0 01-1.419 0 1 1 0 010-1.419l7.295-7.286-7.295-7.286a1.004 1.004 0 01.71-1.713z"
      fill={fill}
    />
  </svg>
);

IconJumpNext.defaultProps = {
  ...iconDefaultProps,
};

export default IconJumpNext;
