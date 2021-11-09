import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDrug: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15.75 5a2 2 0 00-2-2h-3.5a2 2 0 00-2 2v1h7.5V5zM6 21h12a1.5 1.5 0 001.5-1.5v-8a3 3 0 00-1.89-2.78L15.75 8h-7.5l-1.86.75a3 3 0 00-1.89 2.78v8A1.5 1.5 0 006 21zm3.38-8.12H11v-1.63h2v1.63h1.63v2H13v1.62h-2v-1.62H9.38v-2z"
      fill={fill}
    />
  </svg>
);

IconDrug.defaultProps = {
  ...iconDefaultProps,
};

export default IconDrug;
