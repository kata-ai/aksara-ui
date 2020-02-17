import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDiamond: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="12" y="1" width="16" height="16" rx="2" transform="rotate(45 12 1)" fill={fill} />
  </svg>
);

IconDiamond.defaultProps = {
  ...iconDefaultProps,
};

export default IconDiamond;
