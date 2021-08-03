import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconChartGraph2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.25 19.5V3.75A.75.75 0 0019.5 3h-3a.75.75 0 00-.75.75V19.5h-1.5V7.875a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V19.5h-1.5v-6.75A.75.75 0 007.5 12h-3a.75.75 0 00-.75.75v6.75a.75.75 0 100 1.5h16.5a.75.75 0 100-1.5z"
      fill={fill}
    />
  </svg>
);

IconChartGraph2.defaultProps = {
  ...iconDefaultProps,
};

export default IconChartGraph2;
