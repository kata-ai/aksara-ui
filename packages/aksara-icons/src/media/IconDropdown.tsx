import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDropdown: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 13H5C3.9 13 3 12.1 3 11V5C3 3.9 3.9 3 5 3H9C10.1 3 11 3.9 11 5V11C11 12.1 10.1 13 9 13ZM15 3H19C20.1 3 21 3.9 21 5V11C21 12.1 20.1 13 19 13H15C13.9 13 13 12.1 13 11V5C13 3.9 13.9 3 15 3ZM19 10C19.3 10 19.5 9.9 19.7 9.7C20.1 9.3 20.1 8.7 19.7 8.3L17.7 6.3C17.3 5.9 16.7 5.9 16.3 6.3L14.3 8.3C13.9 8.7 13.9 9.3 14.3 9.7C14.7 10.1 15.3 10.1 15.7 9.7L17 8.4L18.3 9.7C18.5 9.9 18.7 10 19 10ZM20 15H4C3.4 15 3 15.4 3 16C3 16.6 3.4 17 4 17H20C20.6 17 21 16.6 21 16C21 15.4 20.6 15 20 15ZM4 19H20C20.6 19 21 19.4 21 20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20C3 19.4 3.4 19 4 19Z"
      fill={fill}
    />
  </svg>
);

IconDropdown.defaultProps = {
  ...iconDefaultProps,
};

export default IconDropdown;
