import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMailInbox: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.302 8.145L18 6.683V4.5A1.5 1.5 0 0016.5 3h-9A1.5 1.5 0 006 4.5v2.183L3.697 8.145A1.5 1.5 0 003 9.413V19.5A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5V9.412a1.5 1.5 0 00-.698-1.267zM19.5 9.413v.675l-1.5.952V8.46l1.5.952zm-3-4.913V12L12 14.857 7.5 12V4.5h9zM6 8.46v2.58l-1.5-.952v-.675L6 8.46z"
      fill={fill}
    />
    <path
      d="M11.467 12.533c.07.069.155.123.248.157a.705.705 0 00.57 0 .75.75 0 00.248-.157l2.25-2.25a.753.753 0 10-1.066-1.066l-.967.976V6.75a.75.75 0 10-1.5 0v3.443l-.967-.976a.753.753 0 10-1.066 1.066l2.25 2.25z"
      fill={fill}
    />
  </svg>
);

IconMailInbox.defaultProps = {
  ...iconDefaultProps,
};

export default IconMailInbox;
