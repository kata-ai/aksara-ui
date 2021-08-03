import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPanelCommand: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3c.6 0 1-.4 1-1s-.4-1-1-1H5V8.3h14V16c0 .6.4 1 1 1s1-.4 1-1V5c0-1.1-.9-2-2-2z"
      fill={fill}
    />
    <path
      d="M15.7 16.3l-3-3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.3-2.3 2.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3l3-3c.4-.4.4-1 0-1.4zM17 19h3c.6 0 1 .4 1 1s-.4 1-1 1h-3c-.6 0-1-.4-1-1s.4-1 1-1z"
      fill={fill}
    />
  </svg>
);

IconPanelCommand.defaultProps = {
  ...iconDefaultProps,
};

export default IconPanelCommand;
