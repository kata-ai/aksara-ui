import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconChartPie: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 10V3a8 8 0 018 8h-7a1 1 0 01-1-1zM6.553 6.348A8.003 8.003 0 0111 5v7a1 1 0 001 1h7A8.002 8.002 0 116.553 6.348z"
      fill={fill}
    />
  </svg>
);

IconChartPie.defaultProps = {
  ...iconDefaultProps,
};

export default IconChartPie;
