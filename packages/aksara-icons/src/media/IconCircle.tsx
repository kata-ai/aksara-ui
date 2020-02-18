import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCircle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill={fill} />
  </svg>
);

IconCircle.defaultProps = {
  ...iconDefaultProps,
};

export default IconCircle;
