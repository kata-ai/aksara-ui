import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBold: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.5 8A5.51 5.51 0 0013 2.5H7A1.5 1.5 0 005.5 4v8A1.5 1.5 0 017 10.5h1.5v-5H13a2.5 2.5 0 010 5 5.44 5.44 0 013.76 1.5 5.46 5.46 0 001.74-4z"
      fill={fill}
    />
    <path
      d="M8.5 10.5H7A1.5 1.5 0 005.5 12v8A1.5 1.5 0 007 21.5h6a5.49 5.49 0 003.76-9.5A5.44 5.44 0 0013 10.5H8.5zm7 5.5a2.5 2.5 0 01-2.5 2.5H8.5v-5H13a2.5 2.5 0 012.5 2.5z"
      fill={fill}
    />
  </svg>
);

IconBold.defaultProps = {
  ...iconDefaultProps,
};

export default IconBold;
