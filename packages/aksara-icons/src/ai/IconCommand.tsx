import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCommand: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.7 15.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L9.6 12 7.3 9.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3 3c.4.4.4 1 0 1.4l-3 3zm7.3.3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.5 1-1 1z"
      fill={fill}
    />
  </svg>
);

IconCommand.defaultProps = {
  ...iconDefaultProps,
};

export default IconCommand;
