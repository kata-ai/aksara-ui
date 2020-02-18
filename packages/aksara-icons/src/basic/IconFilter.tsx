import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconFilter: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 4v2.002H3V4C3 3.4 3.4 3 4 3h16c.6 0 1 .4 1 1zM9 15.609c0-.4-.1-.8-.4-1.2L3.7 8.002h16.6l-4.9 6.504c-.3.3-.4.8-.4 1.2v3.003c0 .4-.3.8-.7.9l-4 1.301c-.6.3-1.3-.2-1.3-.9v-4.403z"
      fill={fill}
    />
  </svg>
);

IconFilter.defaultProps = {
  ...iconDefaultProps,
};

export default IconFilter;
