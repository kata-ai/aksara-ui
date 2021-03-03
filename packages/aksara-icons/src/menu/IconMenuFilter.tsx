import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconMenuFilter: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 5H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1zm-2 6H5c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1zM7 17h10c.6 0 1 .4 1 1s-.4 1-1 1H7c-.6 0-1-.4-1-1s.4-1 1-1z"
      fill={fill}
    />
  </svg>
);

IconMenuFilter.defaultProps = {
  ...iconDefaultProps,
};

export default IconMenuFilter;
