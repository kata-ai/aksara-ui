import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconLogout: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3h7a2.003 2.003 0 012 2v14.001a2.003 2.003 0 01-2 2h-7a2.003 2.003 0 01-2-2V16a1 1 0 012 0v3.001h7V5h-7v3a1 1 0 01-2 0V5a2.003 2.003 0 012-2zm4 10.026H6.417l1.287 1.298a.999.999 0 11-1.42 1.408l-2.94-2.964a.973.973 0 010-1.484l2.957-2.981A1 1 0 117.72 9.71l-1.305 1.315H16a1 1 0 010 2z"
      fill={fill}
    />
  </svg>
);

IconLogout.defaultProps = {
  ...iconDefaultProps,
};

export default IconLogout;
