import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDrag: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 5.41l-1.29 1.3a1.004 1.004 0 01-1.42-1.42l3-3c.097-.088.209-.16.33-.21A1 1 0 0112 2a1 1 0 01.38.08.929.929 0 01.33.21l3 3a.998.998 0 010 1.42.999.999 0 01-1.42 0L13 5.41V9a1 1 0 11-2 0V5.41zm2 13.18l1.29-1.3a1.004 1.004 0 111.42 1.42l-3 3a.929.929 0 01-.33.21c-.12.051-.25.078-.38.08a1.002 1.002 0 01-.38-.08 1.15 1.15 0 01-.33-.21l-3-3a1.003 1.003 0 111.42-1.42l1.29 1.3V15a1 1 0 012 0v3.59zM5.41 13H9a1 1 0 000-2H5.41l1.3-1.29a1.004 1.004 0 00-1.42-1.42l-3 3a1 1 0 00-.21.33.94.94 0 000 .76 1 1 0 00.21.33l3 3a1 1 0 001.639-.325 1 1 0 00-.219-1.095L5.41 13zm16.3-1.71c.091.095.162.207.21.33.051.12.078.25.08.38-.002.13-.029.26-.08.38a1 1 0 01-.21.33l-3 3a1.002 1.002 0 01-1.639-.325 1 1 0 01.219-1.095l1.3-1.29H15a1 1 0 010-2h3.59l-1.3-1.29a1.004 1.004 0 111.42-1.42l3 3z"
      fill={fill}
    />
  </svg>
);

IconDrag.defaultProps = {
  ...iconDefaultProps,
};

export default IconDrag;
