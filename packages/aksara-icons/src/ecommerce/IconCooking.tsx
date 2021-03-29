import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCooking: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 12h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z" fill={fill} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 15a1 1 0 100 2h1v2H5a3 3 0 010-6h1v2H5zM19 15a1 1 0 110 2h-1v2h1a3 3 0 000-6h-1v2h1zM12.211 5.602a1 1 0 00-1.932.518l-1.932.518a3 3 0 015.796-1.553l-1.932.517z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.681 8.674a1 1 0 01.707-1.225l15.455-4.141a1 1 0 01.518 1.932L3.906 9.38a1 1 0 01-1.225-.706z"
      fill={fill}
    />
    <path
      d="M17 8a1 1 0 11-2 0 1 1 0 012 0zM14 10a1 1 0 11-2 0 1 1 0 012 0zM22 9a1 1 0 11-2 0 1 1 0 012 0z"
      fill={fill}
    />
  </svg>
);

IconCooking.defaultProps = {
  ...iconDefaultProps,
};

export default IconCooking;
