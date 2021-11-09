import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMinus: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 11h16a1 1 0 010 2H4a1 1 0 010-2z" fill={fill} />
  </svg>
);

IconMinus.defaultProps = {
  ...iconDefaultProps,
};

export default IconMinus;
