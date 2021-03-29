import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTooltipRight: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.03 9.65V5a1.998 1.998 0 00-2.003-2H5.004A2.006 2.006 0 003 5v14a1.998 1.998 0 002.004 2h12.023a2.006 2.006 0 002.003-2v-4.62l1.674-1.65a1 1 0 000-1.42L19.03 9.65zM7.008 9h8.015a1.003 1.003 0 011.002 1 .999.999 0 01-1.002 1H7.008a1.003 1.003 0 01-1.002-1 1 1 0 011.002-1zm8.015 6H7.008a1.003 1.003 0 01-1.002-1 .999.999 0 011.002-1h8.015a1.003 1.003 0 011.002 1 .999.999 0 01-1.002 1z"
      fill={fill}
    />
  </svg>
);

IconTooltipRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconTooltipRight;
