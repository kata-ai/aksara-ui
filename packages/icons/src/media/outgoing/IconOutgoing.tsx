import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconOutgoing: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3a1 1 0 011-1h7a2 2 0 012 2v7a1 1 0 11-2 0V5.487l-9.26 10.186a1 1 0 01-1.48-1.346L18.648 4H13a1 1 0 01-1-1zM5 6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-4a1 1 0 112 0v4a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h4a1 1 0 010 2H5z"
      fill={fill}
    />
  </svg>
);

IconOutgoing.defaultProps = {
  ...iconDefaultProps,
};

export default IconOutgoing;
