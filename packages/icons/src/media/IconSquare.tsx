import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSquare: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" fill={fill} />
  </svg>
);

IconSquare.defaultProps = {
  ...iconDefaultProps,
};

export default IconSquare;
