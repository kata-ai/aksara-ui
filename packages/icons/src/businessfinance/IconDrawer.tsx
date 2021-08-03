import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDrawer: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 3h15A1.5 1.5 0 0121 4.5v6.75H3V4.5A1.5 1.5 0 014.5 3zm5.25 6h4.5a1.5 1.5 0 001.5-1.5.75.75 0 10-1.5 0h-4.5a.75.75 0 00-1.5 0A1.5 1.5 0 009.75 9zM3 12.75h18v6.75a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-6.75zm6.75 4.5h4.5a1.5 1.5 0 001.5-1.5.75.75 0 10-1.5 0h-4.5a.75.75 0 10-1.5 0 1.5 1.5 0 001.5 1.5z"
      fill={fill}
    />
  </svg>
);

IconDrawer.defaultProps = {
  ...iconDefaultProps,
};

export default IconDrawer;
