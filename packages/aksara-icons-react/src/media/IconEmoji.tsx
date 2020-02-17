import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconEmoji: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill={fill}
    />
    <path
      d="M12 18C14.6476 18 17.1592 15.9548 17.8274 13.9801C18.0044 13.4569 17.5523 13 17 13H12H7C6.44772 13 5.99557 13.4569 6.1726 13.9801C6.8408 15.9548 9.3524 18 12 18Z"
      fill={fill}
    />
    <circle cx="7" cy="10" r="1" fill={fill} />
    <circle cx="17" cy="10" r="1" fill={fill} />
  </svg>
);

IconEmoji.defaultProps = {
  ...iconDefaultProps,
};

export default IconEmoji;
