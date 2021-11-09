import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBrankas: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h12a1 1 0 011 1v12z"
      fill={fill}
    />
    <path
      d="M17 6H7a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-2h-2a1 1 0 010-2h2v-2h-2a1 1 0 010-2h2V7a1 1 0 00-1-1zm-8 7a1 1 0 110-2 1 1 0 010 2z"
      fill={fill}
    />
  </svg>
);

IconBrankas.defaultProps = {
  ...iconDefaultProps,
};

export default IconBrankas;
