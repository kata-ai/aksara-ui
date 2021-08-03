import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconLocator: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" fill={fill} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.93 11H21a1 1 0 010 2h-1.07A8 8 0 0113 19.93V21a1 1 0 01-2 0v-1.07A8 8 0 014.07 13H3a1 1 0 010-2h1.07A8 8 0 0111 4.07V3a1 1 0 012 0v1.07A8 8 0 0119.93 11zM7.757 16.243a6 6 0 108.485-8.485 6 6 0 00-8.485 8.485z"
      fill={fill}
    />
  </svg>
);

IconLocator.defaultProps = {
  ...iconDefaultProps,
};

export default IconLocator;
