import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTickRounded: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 8.2l-5 5c-.4.4-1 .4-1.4 0l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.3 1.3 4.3-4.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
      fill={fill}
    />
  </svg>
);

IconTickRounded.defaultProps = {
  ...iconDefaultProps,
};

export default IconTickRounded;
