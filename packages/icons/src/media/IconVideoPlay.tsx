import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconVideoPlay: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx={12} cy={12} r={10} fill={fill} />
    <path d="M15.4 10.642l-5-2.5c-.6-.4-1.4.1-1.4.8v5.1c0 .7.8 1.2 1.5.9l5-2.5c.7-.4.7-1.5-.1-1.8z" fill="#fff" />
  </svg>
);

IconVideoPlay.defaultProps = {
  ...iconDefaultProps,
};

export default IconVideoPlay;
