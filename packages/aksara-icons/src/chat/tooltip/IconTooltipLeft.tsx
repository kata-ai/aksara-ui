import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTooltipLeft: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H7a2 2 0 00-2 2v4.65l-1.7 1.66a1 1 0 000 1.42L5 14.38V19a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2zm-2 12H9a1 1 0 010-2h8a1 1 0 010 2zm0-4H9a1 1 0 010-2h8a1 1 0 110 2z"
      fill={fill}
    />
  </svg>
);

IconTooltipLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconTooltipLeft;
