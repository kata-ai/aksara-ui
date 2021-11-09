import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconUserTooltipRight: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.5 3H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21H16.5a2.25 2.25 0 002.25-2.25v-4.133l2.032-2.032a.75.75 0 000-1.065L18.75 9.495V5.25A2.25 2.25 0 0016.5 3zm-2.25 13.5a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5H9.75a1.5 1.5 0 00-1.5 1.5.75.75 0 11-1.5 0 3 3 0 013-3H12a3 3 0 013 3 .75.75 0 01-.75.75zM8.625 9a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"
      fill={fill}
    />
    <path d="M10.875 9.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={fill} />
  </svg>
);

IconUserTooltipRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserTooltipRight;
