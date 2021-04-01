import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTarget3: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 11h-.18A8.9 8.9 0 0013 3.18V3a1 1 0 00-2 0v.18A8.9 8.9 0 003.18 11H3a1 1 0 000 2h.18A8.9 8.9 0 0011 20.82V21a1 1 0 002 0v-.18A8.9 8.9 0 0020.82 13H21a1 1 0 000-2zm-8 7.79v-.61a1 1 0 00-2 0v.61A6.87 6.87 0 015.2 13h.62a1 1 0 000-2H5.2A6.87 6.87 0 0111 5.21v.61a1 1 0 002 0v-.61A6.87 6.87 0 0118.8 11h-.62a1 1 0 000 2h.62a6.87 6.87 0 01-5.8 5.79z"
      fill="#313F4E"
    />
    <path
      d="M12 12.14a2.17 2.17 0 100-4.338 2.17 2.17 0 000 4.338zM12 12.94a3.27 3.27 0 00-3.06 2.15.84.84 0 00.8 1.1h4.52a.84.84 0 00.8-1.1A3.27 3.27 0 0012 12.94z"
      fill="#313F4E"
    />
  </svg>
);

IconTarget3.defaultProps = {
  ...iconDefaultProps,
};

export default IconTarget3;
