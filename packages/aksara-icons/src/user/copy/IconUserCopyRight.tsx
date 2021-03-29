import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconUserCopyRight: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15.75 3H5.25A2.25 2.25 0 003 5.25v10.5A2.25 2.25 0 005.25 18H6v.75A2.25 2.25 0 008.25 21h10.5A2.25 2.25 0 0021 18.75V8.25A2.25 2.25 0 0018.75 6H18v-.75A2.25 2.25 0 0015.75 3zm1.5 15a.75.75 0 01-.75-.75.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75.75.75 0 11-1.5 0A2.25 2.25 0 0111.25 15h4.5A2.25 2.25 0 0118 17.25a.75.75 0 01-.75.75zm-6-6.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM8.25 6A2.25 2.25 0 006 8.25v8.25h-.75a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75V6H8.25z"
      fill={fill}
    />
    <path d="M13.5 12a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={fill} />
  </svg>
);

IconUserCopyRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserCopyRight;
