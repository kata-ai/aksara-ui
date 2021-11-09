import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconContactUser: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12.75 10.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={fill} />
    <path
      d="M19.5 3H6a1.5 1.5 0 00-1.5 1.5v3.75h-.75a.75.75 0 000 1.5h.75v4.5h-.75a.75.75 0 100 1.5h.75v3.75A1.5 1.5 0 006 21h13.5a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-5.25 11.25h-3a.75.75 0 00-.75.75v1.575a.75.75 0 11-1.5 0V15a2.25 2.25 0 012.25-2.25h3A2.25 2.25 0 0116.5 15v1.575a.75.75 0 11-1.5 0V15a.75.75 0 00-.75-.75zm-3.75-4.5a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"
      fill={fill}
    />
  </svg>
);

IconContactUser.defaultProps = {
  ...iconDefaultProps,
};

export default IconContactUser;
