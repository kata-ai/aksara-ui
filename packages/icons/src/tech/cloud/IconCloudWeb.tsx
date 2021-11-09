import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCloudWeb: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M20.4 18.15a3.21 3.21 0 00-6.3-.76 2.33 2.33 0 00.3 4.61H20a1.94 1.94 0 00.4-3.85z" fill={fill} />
    <path
      d="M8.67 21.43a1 1 0 10.66-1.89 7.428 7.428 0 01-1.64-.83C9.94 17 11.1 12.5 8.73 12c-1.63-.35-.54-2.25-1.64-3.27a2.53 2.53 0 00-2.2-.37 8 8 0 015.36-4.16c.79.89 3.31 1.69 4.2 3.71.89 2.02 3.37 1.17 4.69.5a7.89 7.89 0 01.81 4.48 1.006 1.006 0 102 .22 10 10 0 10-13.28 8.32z"
      fill={fill}
    />
  </svg>
);

IconCloudWeb.defaultProps = {
  ...iconDefaultProps,
};

export default IconCloudWeb;
