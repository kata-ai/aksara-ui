import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCrystalLamp: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 11c0 1.4-.4 2.8-1.1 4H5.1C4.4 13.8 4 12.5 4 11c0-4.4 3.6-8 8-8s8 3.6 8 8zM5.2 21c-.7 0-1.1-.6-1-1.2l.6-2.8h14.4l.6 2.8c.1.6-.4 1.2-1 1.2H5.2z"
      fill={fill}
    />
  </svg>
);

IconCrystalLamp.defaultProps = {
  ...iconDefaultProps,
};

export default IconCrystalLamp;
