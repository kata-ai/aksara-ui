import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconClock: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4 11h-4c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1s1 .4 1 1v6h3c.6 0 1 .4 1 1s-.4 1-1 1z"
      fill={fill}
    />
  </svg>
);

IconClock.defaultProps = {
  ...iconDefaultProps,
};

export default IconClock;
