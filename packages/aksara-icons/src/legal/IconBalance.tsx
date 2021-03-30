import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBalance: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M10 15a4 4 0 11-8 0M22 10a4 4 0 11-8 0" fill={fill} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.615 5.077A1 1 0 0118.8 5.4l3 4a1 1 0 11-1.6 1.2L18 7.667 15.8 10.6a1 1 0 01-1.6-1.2l.8-1.067-2.595 1.081a.995.995 0 01-.042.018l-4.792 1.997L9.8 14.4a1 1 0 01-1.6 1.2L6 12.667 3.8 15.6a1 1 0 11-1.6-1.2l3-4a1 1 0 01.415-.323L11 7.833V6a1 1 0 112 0v1l4.615-1.923z"
      fill={fill}
    />
  </svg>
);

IconBalance.defaultProps = {
  ...iconDefaultProps,
};

export default IconBalance;
