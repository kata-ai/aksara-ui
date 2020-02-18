import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPlus: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm4 11h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 012 0v3h3a1 1 0 010 2z"
      fill={fill}
    />
  </svg>
);

IconPlus.defaultProps = {
  ...iconDefaultProps,
};

export default IconPlus;
