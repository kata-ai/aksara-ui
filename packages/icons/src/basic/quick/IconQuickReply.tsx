import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconQuickReply: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0)">
      <path
        d="M12.343 5.955H6.45l4.058-4.058a1.12 1.12 0 000-1.58 1.144 1.144 0 00-1.58 0L2.961 6.283a1.11 1.11 0 00-.327.79c0 .299.116.58.327.79l5.966 5.967a1.144 1.144 0 001.58 0 1.12 1.12 0 000-1.58L6.452 8.19h5.892a6.795 6.795 0 016.787 6.788 6.794 6.794 0 01-6.787 6.786H9.149c-.53 0-.958.43-.958.959v.319c0 .53.429.958.958.958h3.194c4.975 0 9.022-4.047 9.022-9.022 0-4.975-4.047-9.023-9.022-9.023z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="none" d="M0 0H24V24H0z" />
      </clipPath>
    </defs>
  </svg>
);

IconQuickReply.defaultProps = {
  ...iconDefaultProps,
};

export default IconQuickReply;
