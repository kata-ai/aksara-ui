import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconNoSmoking: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M13.89 7.599h4a1.4 1.4 0 011.4 1.4 1 1 0 002 0 3.408 3.408 0 00-3.4-3.4h-4a.6.6 0 01-.6-.6 1 1 0 00-2 0 2.599 2.599 0 002.6 2.6zM21 10.998h-8.76l2 1.999H17v1.999h-.76l1.88 1.88c.026.023.05.05.07.08a1 1 0 00.81-.96v-3h1v3a1 1 0 002 0v-3.999a1 1 0 00-1-1zM4.71 6.29a1.004 1.004 0 00-1.42 1.419l3.3 3.289H3a1 1 0 00-1 1v3.998a1 1 0 001 1h9.59l2.7 2.708a1 1 0 001.42 0 1 1 0 000-1.42L4.71 6.29z"
      fill={fill}
    />
  </svg>
);

IconNoSmoking.defaultProps = {
  ...iconDefaultProps,
};

export default IconNoSmoking;
