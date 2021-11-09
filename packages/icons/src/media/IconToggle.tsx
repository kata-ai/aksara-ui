import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconToggle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM5 12C5 14.2 6.8 16 9 16H15C17.2 16 19 14.2 19 12C19 9.8 17.2 8 15 8H9C6.8 8 5 9.8 5 12ZM12 12C12 10.3 13.3 9 15 9C16.7 9 18 10.3 18 12C18 13.7 16.7 15 15 15C13.3 15 12 13.7 12 12Z"
      fill={fill}
    />
  </svg>
);

IconToggle.defaultProps = {
  ...iconDefaultProps,
};

export default IconToggle;
