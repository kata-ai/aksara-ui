import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUser2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5.25 21h13.5A2.25 2.25 0 0021 18.75a6 6 0 00-6-6H9a6 6 0 00-6 6A2.25 2.25 0 005.25 21zM12 11.25A4.125 4.125 0 1012 3a4.125 4.125 0 000 8.25z"
      fill={fill}
    />
  </svg>
);

IconUser2.defaultProps = {
  ...iconDefaultProps,
};

export default IconUser2;
