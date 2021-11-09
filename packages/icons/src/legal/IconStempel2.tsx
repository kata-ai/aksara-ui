import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconStempel2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 15.83c0-1-2.37-1.91-5.52-2.12v-2.2a12.81 12.81 0 011.27-5.31 3 3 0 10-5.7-1.73 3 3 0 00.27 1.87 12.89 12.89 0 011.21 6v1.39C7.36 13.92 5 14.79 5 15.83a.29.29 0 000 .09.24.24 0 000 .08v3c0 2.07 3.52 3 7 3s7-.93 7-3v-3a.239.239 0 000-.08.289.289 0 000-.09zm-2 3.09c-.29.34-2 1.08-5 1.08s-4.71-.74-5-1.08v-1.57a17.39 17.39 0 005 .65 17.39 17.39 0 005-.65v1.57z"
      fill={fill}
    />
  </svg>
);

IconStempel2.defaultProps = {
  ...iconDefaultProps,
};

export default IconStempel2;
