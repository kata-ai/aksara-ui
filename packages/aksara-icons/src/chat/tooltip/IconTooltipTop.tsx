import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTooltipTop: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 5.002h-4.63L12.71 3.31a1 1 0 00-1.42 0L9.63 5.002H5a2 2 0 00-2 2.001v12.01a2.002 2.002 0 002 2.001h14a2 2 0 002-2.001V7.003a2.002 2.002 0 00-2-2.001zM17 16.01H7.15a1 1 0 010-2.001H17a1 1 0 01.707 1.708 1 1 0 01-.707.293zm0-4.003H7.15a1 1 0 01-.707-1.708 1 1 0 01.707-.293H17a1 1 0 010 2.001z"
      fill={fill}
    />
  </svg>
);

IconTooltipTop.defaultProps = {
  ...iconDefaultProps,
};

export default IconTooltipTop;
