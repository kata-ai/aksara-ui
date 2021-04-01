import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCalendarSchedule: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.5 4.5h3A1.5 1.5 0 0121 6v3H3V6a1.5 1.5 0 011.5-1.5h3v-.75a.75.75 0 011.5 0v.75h6v-.75a.75.75 0 111.5 0v.75z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 10.5h18v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-9zm5.033 7.282l.75-.75a.752.752 0 10-1.065-1.065l-.218.225-.218-.225a.753.753 0 00-1.064 1.065l.75.75a.75.75 0 001.065 0zm0-3.75l.75-.75a.752.752 0 10-1.065-1.065l-.218.226-.218-.226a.753.753 0 00-1.064 1.066l.75.75a.75.75 0 001.065 0zM12 18h5.25a.75.75 0 100-1.5H12a.75.75 0 100 1.5zm0-3.75h5.25a.75.75 0 100-1.5H12a.75.75 0 100 1.5z"
      fill={fill}
    />
  </svg>
);

IconCalendarSchedule.defaultProps = {
  ...iconDefaultProps,
};

export default IconCalendarSchedule;
