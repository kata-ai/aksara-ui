import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTooltipBottom: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5a1.998 1.998 0 00-2 2.004v12.023a2.006 2.006 0 002 2.003h4.63l1.66 1.674a1 1 0 001.42 0l1.66-1.674H19a1.999 1.999 0 002-2.003V5.004A2.006 2.006 0 0019 3zm-2 11.02H7a.999.999 0 01-1-1.001 1.003 1.003 0 011-1.002h10a.999.999 0 011 1.002 1.003 1.003 0 01-1 1.002zm0-4.007H7a.999.999 0 01-1-1.002A1.003 1.003 0 017 8.01h10a.999.999 0 011 1.001 1.003 1.003 0 01-1 1.002z"
      fill={fill}
    />
  </svg>
);

IconTooltipBottom.defaultProps = {
  ...iconDefaultProps,
};

export default IconTooltipBottom;
