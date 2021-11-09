import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDesign: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 5H17.6C19.7 6.7 21 9.2 21 12C21 12.6 20.6 13 20 13C19.4 13 19 12.6 19 12C19 8.1 15.9 5 12 5C8.1 5 5 8.1 5 12C5 12.6 4.6 13 4 13C3.4 13 3 12.6 3 12C3 9.2 4.3 6.7 6.4 5H4C3.4 5 3 4.6 3 4C3 3.4 3.4 3 4 3H20C20.6 3 21 3.4 21 4C21 4.6 20.6 5 20 5ZM12.9 7.4C12.5 6.8 11.6 6.8 11.2 7.4L8.40001 12C8.20001 12.4 8.20001 12.9 8.50001 13.2C9.30001 14 9.80001 15.2 9.90001 16.4V17H14.1V16.4C14.1 15.2 14.6 14 15.5 13.2C15.8 12.9 15.9 12.4 15.6 12L12.9 7.4ZM12 11C12.6 11 13 11.4 13 12C13 12.6 12.6 13 12 13C11.4 13 11 12.6 11 12C11 11.4 11.4 11 12 11ZM15 20C15 19.4 14.5 19 14 19H10C9.4 19 9 19.4 9 20C9 20.6 9.4 21 10 21H14C14.6 21 15 20.6 15 20Z"
      fill={fill}
    />
  </svg>
);

IconDesign.defaultProps = {
  ...iconDefaultProps,
};

export default IconDesign;
