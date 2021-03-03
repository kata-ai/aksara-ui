import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCrystalLamp: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 11C20 12.4 19.6 13.8 18.9 15H5.1C4.4 13.8 4 12.5 4 11C4 6.6 7.6 3 12 3C16.4 3 20 6.6 20 11ZM5.19999 21C4.49999 21 4.09999 20.4 4.19999 19.8L4.79999 17H19.2L19.8 19.8C19.9 20.4 19.4 21 18.8 21H5.19999Z"
      fill={fill}
    />
  </svg>
);

IconCrystalLamp.defaultProps = {
  ...iconDefaultProps,
};

export default IconCrystalLamp;
