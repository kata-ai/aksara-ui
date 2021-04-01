import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBag: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.14 7h-3.102c0-2.2-1.801-4-4.003-4a4.013 4.013 0 00-4.003 4H4.929c-1.2 0-2.101 1.2-1.901 2.4l2.001 10c.3.9 1.001 1.6 1.902 1.6h10.208c.9 0 1.701-.7 1.801-1.6l2.002-10c.3-1.2-.6-2.4-1.802-2.4zm-7.105-2c1.1 0 2.002.9 2.002 2h-4.004c0-1.1.901-2 2.002-2zm-3.002 8c-1.101 0-2.002-.9-2.002-2 0-.7.4-1.4 1-1.7v.7c0 .6.401 1 1.002 1 .6 0 1-.4 1-1v-.7c.6.3 1.001 1 1.001 1.7 0 1.1-.9 2-2.001 2zm6.004 0c-1.1 0-2.001-.9-2.001-2 0-.7.4-1.4 1-1.7v.7c0 .6.4 1 1.001 1 .6 0 1.001-.4 1.001-1v-.7c.6.3 1 1 1 1.7 0 1.1-.9 2-2 2z"
      fill={fill}
    />
  </svg>
);

IconBag.defaultProps = {
  ...iconDefaultProps,
};

export default IconBag;
