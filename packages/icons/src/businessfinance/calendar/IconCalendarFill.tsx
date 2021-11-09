import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCalendarFill: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.5 4.5h-3v-.75a.75.75 0 10-1.5 0v.75H9v-.75a.75.75 0 00-1.5 0v.75h-3A1.5 1.5 0 003 6v3h18V6a1.5 1.5 0 00-1.5-1.5zM3 10.5v9A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-9H3zm4.5 2.25h9a.75.75 0 110 1.5h-9a.75.75 0 110-1.5zm0 3h6a.75.75 0 110 1.5h-6a.75.75 0 110-1.5z"
      fill={fill}
    />
  </svg>
);

IconCalendarFill.defaultProps = {
  ...iconDefaultProps,
};

export default IconCalendarFill;
