import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconUserTooltipLeft: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M13.125 9.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={fill} />
    <path
      d="M21 18.75V5.25A2.25 2.25 0 0018.75 3H7.5a2.25 2.25 0 00-2.25 2.25v4.245L3.217 11.52a.75.75 0 000 1.065l2.033 2.032v4.133A2.25 2.25 0 007.5 21h11.25A2.25 2.25 0 0021 18.75zM15.375 9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM12 12.75h2.25a3 3 0 013 3 .75.75 0 01-1.5 0 1.5 1.5 0 00-1.5-1.5H12a1.5 1.5 0 00-1.5 1.5.75.75 0 01-1.5 0 3 3 0 013-3z"
      fill={fill}
    />
  </svg>
);

IconUserTooltipLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserTooltipLeft;
