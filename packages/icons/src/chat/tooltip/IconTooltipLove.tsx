import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTooltipLove: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5a1.998 1.998 0 00-2 2.004v12.023a2.006 2.006 0 002 2.003h4.63l1.66 1.674a1 1 0 001.42 0l1.66-1.674H19a1.999 1.999 0 002-2.003V5.004A2.006 2.006 0 0019 3zm-3.69 9.478l-2.84 2.835a.66.66 0 01-.31.16h-.32a.66.66 0 01-.31-.16l-2.84-2.815a2.324 2.324 0 01-.51-2.549A2.348 2.348 0 0112 9.192a2.348 2.348 0 013.82.757 2.328 2.328 0 01-.51 2.549v-.02z"
      fill={fill}
    />
  </svg>
);

IconTooltipLove.defaultProps = {
  ...iconDefaultProps,
};

export default IconTooltipLove;
