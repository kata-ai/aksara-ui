import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserChat: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17 3a4 4 0 00-4 4 3.92 3.92 0 00.46 1.81L13 10.6a.34.34 0 00.38.4l1.84-.45v-.05A3.89 3.89 0 0017 11a4 4 0 100-8zM9 14a3 3 0 100-6 3 3 0 000 6zM12 15H6a3 3 0 00-3 3v1a2 2 0 002 2h8a2 2 0 002-2v-1a3 3 0 00-3-3z"
      fill={fill}
    />
  </svg>
);

IconUserChat.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserChat;
