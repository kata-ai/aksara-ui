import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconNetwork: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5.246 11.987a2.246 2.246 0 002.022-3.213l1.497-1.498a2.186 2.186 0 001.932 0l1.497 1.498a2.246 2.246 0 104.043 0l1.497-1.498a2.246 2.246 0 10-1.033-1.063L15.204 7.71a2.185 2.185 0 00-1.932 0l-1.497-1.498a2.248 2.248 0 00-3.11-2.945 2.246 2.246 0 00-.933 2.945L6.234 7.71a2.245 2.245 0 10-.988 4.276z"
      fill={fill}
    />
    <path
      d="M18.723 11.987A2.244 2.244 0 0016.7 15.2l-1.497 1.497a2.186 2.186 0 00-1.932 0L11.775 15.2a2.247 2.247 0 00-3.925-2.173 2.247 2.247 0 00-.118 2.173l-1.498 1.497a2.245 2.245 0 00-2.614 3.576 2.246 2.246 0 003.648-2.512l1.497-1.498a2.186 2.186 0 001.932 0l1.497 1.498a2.247 2.247 0 003.925 2.172 2.248 2.248 0 00.118-2.172l1.497-1.498a2.246 2.246 0 10.989-4.276z"
      fill={fill}
    />
  </svg>
);

IconNetwork.defaultProps = {
  ...iconDefaultProps,
};

export default IconNetwork;
