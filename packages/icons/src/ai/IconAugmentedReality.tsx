import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconAugmentedReality: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 9a1 1 0 00-.61-.92A8 8 0 006.17 5.32a1 1 0 00-1-.89H4a1 1 0 00-1 1v7.73a1 1 0 001 1h.6v4.22a2 2 0 002 2h1.54V21a1 1 0 001 1h6.93a1 1 0 001-1v-4.12a8.11 8.11 0 003.61-6.77v-.35A1 1 0 0021 9zm-8.37-5a6 6 0 015.66 4H9.71a3.72 3.72 0 00-1.59-1.94A6 6 0 0112.63 4zm0 12.22h-.45a2 2 0 00-1.76 1.09 2 2 0 01-1.75 1.1H6.58V13a3.74 3.74 0 003.3-3h8.79v.11a6.08 6.08 0 01-6.04 6.11z"
      fill={fill}
    />
  </svg>
);

IconAugmentedReality.defaultProps = {
  ...iconDefaultProps,
};

export default IconAugmentedReality;
