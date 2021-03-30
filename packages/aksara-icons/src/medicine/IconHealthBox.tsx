import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconHealthBox: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17 3H7a4 4 0 00-4 4v10c0 .272.028.543.08.81.05.257.128.509.23.75.31.71.812 1.32 1.45 1.76.16.1.33.2.51.29A4 4 0 007 21h10a4 4 0 001.73-.39c.18-.09.35-.19.51-.29a4.16 4.16 0 001.45-1.76c.102-.241.18-.493.23-.75.052-.267.08-.538.08-.81V7a4 4 0 00-4-4zm-6.25 9.5v2H9.5v1.25h-2V14.5H6.25v-2H7.5v-1.25h2v1.25h1.25zm7 2v2H12.5v-2h5.25zm-5.25-2v-2h5.25v2H12.5zM5 7a2 2 0 012-2h10a2 2 0 012 2H5z"
      fill={fill}
    />
  </svg>
);

IconHealthBox.defaultProps = {
  ...iconDefaultProps,
};

export default IconHealthBox;
