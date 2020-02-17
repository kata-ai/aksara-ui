import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUser: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M22 13a10 10 0 10-16.466 7.62c.01-.062.038-.187.038-.187C6.018 18.493 8.722 17 12 17s5.982 1.493 6.428 3.433c0 0 .027.125.038.188A9.972 9.972 0 0022 13zm-6.141-2l-.41 2a3.484 3.484 0 01-6.899 0l-.409-2a4 4 0 117.718 0z"
      fill={fill}
    />
  </svg>
);

IconUser.defaultProps = {
  ...iconDefaultProps,
};

export default IconUser;
