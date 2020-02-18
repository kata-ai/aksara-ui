import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBell: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.3 13.1l1.5 2.2c.1.2.2.4.2.6v.7c0 .6-.4 1-1 1H5c-.6 0-1-.5-1-1v-.7c0-.2.1-.4.2-.5l1.6-2.3c.2-.3.3-.6.3-.9l.4-4.4c.3-2.9 3-5.1 6.1-4.8 2.6.3 4.6 2.4 4.9 5l.5 4.2c0 .3.1.6.3.9zm-3.7 6.4c-.5.9-1.5 1.5-2.6 1.5s-2.1-.6-2.6-1.5h5.2z"
      fill={fill}
    />
  </svg>
);

IconBell.defaultProps = {
  ...iconDefaultProps,
};

export default IconBell;
