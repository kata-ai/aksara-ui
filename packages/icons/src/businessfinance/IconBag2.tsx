import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBag2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.5 6h-3.75V4.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5V6H4.5A1.5 1.5 0 003 7.5l.667 4.71a1.5 1.5 0 001.5 1.29H8.25v-2.25a.75.75 0 111.5 0v2.25h4.613v-2.25a.75.75 0 111.5 0v2.25h3a1.5 1.5 0 001.5-1.29L21 7.605V7.5A1.5 1.5 0 0019.5 6zM9.75 6V4.5h4.5V6h-4.5zM15.863 15v1.058a.75.75 0 11-1.5 0V15H9.75v1.058a.75.75 0 11-1.5 0V15H5.152c-.22 0-.439-.028-.652-.082V19.5A1.5 1.5 0 006 21h12a1.5 1.5 0 001.5-1.5v-4.582a2.689 2.689 0 01-.652.082h-2.985z"
      fill={fill}
    />
  </svg>
);

IconBag2.defaultProps = {
  ...iconDefaultProps,
};

export default IconBag2;
