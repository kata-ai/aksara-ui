import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconQuickForward: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0)">
      <path
        d="M11.657 5.955h5.892l-4.058-4.058a1.12 1.12 0 010-1.58 1.144 1.144 0 011.58 0l5.967 5.966c.21.211.327.492.327.79 0 .299-.116.58-.327.79l-5.966 5.967a1.144 1.144 0 01-1.581 0 1.12 1.12 0 010-1.58l4.058-4.06h-5.892a6.795 6.795 0 00-6.787 6.788 6.794 6.794 0 006.787 6.786h3.194c.529 0 .958.43.958.959v.319c0 .53-.429.958-.958.958h-3.194c-4.975 0-9.022-4.047-9.022-9.022 0-4.975 4.047-9.023 9.022-9.023z"
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

IconQuickForward.defaultProps = {
  ...iconDefaultProps,
};

export default IconQuickForward;
