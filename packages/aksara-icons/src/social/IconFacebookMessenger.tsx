import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconFacebookMessenger: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.345 6.29947C16.6474 4.81657 14.3941 4 12 4C9.60586 4 7.35256 4.81657 5.65496 6.29947C3.94285 7.79508 3 9.78769 3 11.9104C3 13.5005 3.53053 15.0251 4.53655 16.3334L3.76333 21L8.65477 19.256C9.71869 19.6309 10.843 19.8209 12 19.8209C14.3941 19.8209 16.6474 19.0042 18.345 17.5213C20.0572 16.0257 21 14.0331 21 11.9104C21 9.78769 20.0572 7.79508 18.345 6.29947ZM12.7888 14.1823L10.7993 12.68L6.04047 14.4977L11.4856 9.27066L13.4992 10.8225L17.8551 9.19252L12.7888 14.1823Z"
      fill={fill}
    />
  </svg>
);

IconFacebookMessenger.defaultProps = {
  ...iconDefaultProps,
};

export default IconFacebookMessenger;
