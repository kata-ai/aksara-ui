import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconButton: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM18 15C18.6 15 19 14.6 19 14V10C19 9.4 18.6 9 18 9H6C5.4 9 5 9.4 5 10V14C5 14.6 5.4 15 6 15H18ZM8 11H16C16.6 11 17 11.5 17 12C17 12.6 16.6 13 16 13H8C7.4 13 7 12.6 7 12C7 11.4 7.4 11 8 11Z"
      fill={fill}
    />
  </svg>
);

IconButton.defaultProps = {
  ...iconDefaultProps,
};

export default IconButton;
