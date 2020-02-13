import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconEnvironments: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm1.444 4.831a1 1 0 101.112-1.663 1 1 0 00-1.112 1.663zm3 0a1 1 0 101.112-1.663 1 1 0 00-1.112 1.663zM5 13h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2zm1.444 4.831a1 1 0 101.111-1.662 1 1 0 00-1.11 1.662zm3 0a1 1 0 101.111-1.662 1 1 0 00-1.11 1.662z"
      fill={fill}
    />
  </svg>
);

IconEnvironments.defaultProps = {
  ...iconDefaultProps,
};

export default IconEnvironments;
