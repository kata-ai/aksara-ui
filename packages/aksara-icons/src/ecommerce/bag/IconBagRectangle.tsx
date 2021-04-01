import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBagRectangle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2zM8 6a1 1 0 012 0v1a2 2 0 104 0V6a1 1 0 012 0v1a4 4 0 11-8 0V6z"
      fill={fill}
    />
  </svg>
);

IconBagRectangle.defaultProps = {
  ...iconDefaultProps,
};

export default IconBagRectangle;
