import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconDropDown: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.918 7.62a1 1 0 00-.92-.62h-16a1 1 0 00-.92.62.999.999 0 00.21 1.089l8 7.995a1 1 0 001.42 0l8-7.995a1 1 0 00.21-1.09z"
      fill={fill}
    />
  </svg>
);

IconDropDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconDropDown;
