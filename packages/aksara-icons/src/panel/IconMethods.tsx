import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconMethods: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H8C8.6 21 9 20.6 9 20C9 19.4 8.6 19 8 19H5V8.3H19V16C19 16.6 19.4 17 20 17C20.6 17 21 16.6 21 16V5C21 3.9 20.1 3 19 3ZM15.7 16.3L12.7 13.3C12.3 12.9 11.7 12.9 11.3 13.3C10.9 13.7 10.9 14.3 11.3 14.7L13.6 17L11.3 19.3C10.9 19.7 10.9 20.3 11.3 20.7C11.5 20.9 11.8 21 12 21C12.3 21 12.5 20.9 12.7 20.7L15.7 17.7C16.1 17.3 16.1 16.7 15.7 16.3ZM17 19H20C20.6 19 21 19.4 21 20C21 20.6 20.6 21 20 21H17C16.4 21 16 20.6 16 20C16 19.4 16.4 19 17 19Z"
      fill={fill}
    />
  </svg>
);

IconMethods.defaultProps = {
  ...iconDefaultProps,
};

export default IconMethods;
