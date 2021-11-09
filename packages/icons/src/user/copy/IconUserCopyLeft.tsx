import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconUserCopyLeft: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M10.5 12a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={fill} />
    <path
      d="M5.25 21h10.5A2.25 2.25 0 0018 18.75V18h.75A2.25 2.25 0 0021 15.75V5.25A2.25 2.25 0 0018.75 3H8.25A2.25 2.25 0 006 5.25V6h-.75A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21zm7.5-9.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM8.25 15h4.5A2.25 2.25 0 0115 17.25a.75.75 0 11-1.5 0 .75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75.75.75 0 11-1.5 0A2.25 2.25 0 018.25 15zM7.5 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H18V8.25A2.25 2.25 0 0015.75 6H7.5v-.75z"
      fill={fill}
    />
  </svg>
);

IconUserCopyLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserCopyLeft;
