import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSound: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 15a1 1 0 00-1 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1v-3a1 1 0 10-2 0v3a3 3 0 003 3h8a3 3 0 003-3v-3a1 1 0 00-1-1zM6 9a1 1 0 001-1V5a1 1 0 011-1h8a1 1 0 011 1v3a1 1 0 002 0V5a3 3 0 00-3-3H8a3 3 0 00-3 3v3a1 1 0 001 1z"
      fill={fill}
    />
    <path
      d="M20 11h-2.5a.5.5 0 01-.5-.5 2.5 2.5 0 00-5 0v3a.5.5 0 01-1 0v-2a2.5 2.5 0 00-4.95-.5H4a1 1 0 000 2h2.5A1.5 1.5 0 008 11.5a.5.5 0 011 0v2a2.5 2.5 0 005 0v-3a.5.5 0 011 0 2.5 2.5 0 002.5 2.5H20a1 1 0 000-2zM12 19a1 1 0 100-2 1 1 0 000 2z"
      fill={fill}
    />
  </svg>
);

IconSound.defaultProps = {
  ...iconDefaultProps,
};

export default IconSound;
