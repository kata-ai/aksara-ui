import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCollaboration: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 7.997a2 2 0 100-4 2 2 0 000 4zM19 7.997a2 2 0 100-4 2 2 0 000 4zM19 9.997h-2.4l-1.7-3c-.3-.5-.9-.6-1.4-.4-.5.3-.6.9-.4 1.4l1.9 3.3v7.7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2z"
      fill={fill}
    />
    <path
      d="M12.5 3.097c-.5-.2-1.1-.1-1.4.4l-3.7 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7.7l3.9-6.8c.2-.5.1-1.1-.4-1.4z"
      fill={fill}
    />
  </svg>
);

IconCollaboration.defaultProps = {
  ...iconDefaultProps,
};

export default IconCollaboration;
