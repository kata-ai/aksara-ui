import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconWarningRounded: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 15.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm2-9l-1 5c0 .6-.4 1-1 1s-1-.4-1-1l-1-5c-.1-.6.3-2 2-2s2.1 1.4 2 2z"
      fill={fill}
    />
  </svg>
);

IconWarningRounded.defaultProps = {
  ...iconDefaultProps,
};

export default IconWarningRounded;
