import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconShare: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5.31 12.72v-.05a.781.781 0 01-.16-.24.3.3 0 010-.08.91.91 0 010-.7.3.3 0 010-.08.78.78 0 01.16-.24v-.05a.81.81 0 01.24-.17l2.53-1.27a3 3 0 100 4.32l-2.53-1.27a.812.812 0 01-.24-.17zM9 12.36c.01-.12.01-.24 0-.36.01-.12.01-.24 0-.36l-.76.36.76.36z"
      fill={fill}
    />
    <path
      d="M15 6.36L8 9.84l-2.45 1.27a.81.81 0 00-.24.17v.05a.78.78 0 00-.16.24.3.3 0 000 .08.91.91 0 000 .7.3.3 0 000 .08c.038.09.092.17.16.24v.05c.069.07.15.128.24.17l2.53 1.27 7 3.48a3 3 0 01.88-1.8L9 12.36 8.24 12l.76-.36 7-3.48a3 3 0 01-1-1.8z"
      fill={fill}
    />
    <path
      d="M15.92 8.16A3 3 0 1015 6c-.01.12-.01.24 0 .36a3 3 0 00.92 1.8zM19 6a1 1 0 11-2 0 1 1 0 012 0zM15.92 20.16A3 3 0 1015 18c-.01.12-.01.24 0 .36a3 3 0 00.92 1.8zM19 18a1 1 0 11-2.002 0A1 1 0 0119 18z"
      fill={fill}
    />
  </svg>
);

IconShare.defaultProps = {
  ...iconDefaultProps,
};

export default IconShare;
