import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconLock: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17 9.49v-3a5 5 0 00-10 0V10a1 1 0 102 0V6.49a3 3 0 116 0v3H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2zm-5 8a2 2 0 112-2 1.999 1.999 0 01-2 2.01v-.01z"
      fill={fill}
    />
  </svg>
);

IconLock.defaultProps = {
  ...iconDefaultProps,
};

export default IconLock;
