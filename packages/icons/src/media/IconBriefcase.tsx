import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBriefcase: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 7H19C20.1 7 21 7.9 21 9V11H3V9C3 7.9 3.9 7 5 7H7V6C7 4.3 8.3 3 10 3H14C15.7 3 17 4.3 17 6V7ZM10 5C9.4 5 9 5.4 9 6V7H15V6C15 5.4 14.6 5 14 5H10ZM5 21C3.9 21 3 20.1 3 19V13H21V19C21 20.1 20.1 21 19 21H5Z"
      fill={fill}
    />
  </svg>
);

IconBriefcase.defaultProps = {
  ...iconDefaultProps,
};

export default IconBriefcase;
