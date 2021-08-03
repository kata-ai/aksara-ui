import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTemplate: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21 9H3V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V9Z" fill={fill} />
    <path d="M9 21H5C3.9 21 3 20.1 3 19V11H9V21Z" fill={fill} />
    <path d="M19 21H11V11H21V19C21 20.1 20.1 21 19 21Z" fill={fill} />
  </svg>
);

IconTemplate.defaultProps = {
  ...iconDefaultProps,
};

export default IconTemplate;
