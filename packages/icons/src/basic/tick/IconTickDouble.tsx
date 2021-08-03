import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTickDouble: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21.708 7.27a.996.996 0 00-1.412-.002l-8.308 8.313-1.08-1.085 6.78-6.784a1 1 0 00-1.411-1.42L9.495 13.08 8.7 12.28a1 1 0 10-1.413 1.417l.794.797-1.087 1.087-3.289-3.3a1 1 0 00-1.412 1.416l3.994 4.01a.997.997 0 001.411 0l1.795-1.795 1.787 1.794a.996.996 0 001.412.001l9.014-9.02a1.004 1.004 0 00.002-1.417z"
      fill={fill}
    />
  </svg>
);

IconTickDouble.defaultProps = {
  ...iconDefaultProps,
};

export default IconTickDouble;
