import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconStetoskop: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.543 8.09a2.448 2.448 0 00-2.188 3.564c.255.5.675.898 1.189 1.126v2.86A3.371 3.371 0 0114.175 19h-.73a3.348 3.348 0 01-3.218-2.47 6.097 6.097 0 004.948-6V6.91a2.46 2.46 0 00-2.45-2.46h-.459V4a1 1 0 10-2 0v2.91a1 1 0 102 0v-.46h.46a.46.46 0 01.45.46v3.64a4.091 4.091 0 01-4.089 4.09A4.087 4.087 0 015 10.55V6.91a.46.46 0 01.45-.46h.46v.46a1 1 0 101.999 0V4a1 1 0 10-2 0v.45H5.45A2.458 2.458 0 003 6.91v3.64a6.101 6.101 0 005.178 6A5.37 5.37 0 0013.446 21h.73a5.377 5.377 0 005.367-5.36v-2.86a2.45 2.45 0 00-1-4.69z"
      fill={fill}
    />
  </svg>
);

IconStetoskop.defaultProps = {
  ...iconDefaultProps,
};

export default IconStetoskop;
