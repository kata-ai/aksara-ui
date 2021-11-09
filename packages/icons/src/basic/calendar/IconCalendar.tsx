import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCalendar: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 5h-1V4a1 1 0 00-2 0v1H8V4a1 1 0 00-2 0v1H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zM5 19v-9h14v9H5z"
      fill={fill}
    />
  </svg>
);

IconCalendar.defaultProps = {
  ...iconDefaultProps,
};

export default IconCalendar;
