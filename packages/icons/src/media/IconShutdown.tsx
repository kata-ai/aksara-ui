import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconShutdown: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17.66 4.93a1 1 0 000 1.41 8 8 0 11-11.32 0 1 1 0 00-1.41-1.41A10 10 0 1022 12a9.93 9.93 0 00-2.93-7.07 1 1 0 00-1.41 0z"
      fill={fill}
    />
    <path d="M12 13a1 1 0 001-1V3a1 1 0 00-2 0v9a1 1 0 001 1z" fill={fill} />
  </svg>
);

IconShutdown.defaultProps = {
  ...iconDefaultProps,
};

export default IconShutdown;
