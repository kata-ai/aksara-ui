import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSave: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2H17C18.1 2 19 2.9 19 4V11.5H17H7H5V4C5 2.9 5.9 2 7 2ZM7 13.5H5V16.5H7H17H19V13.5H17H7ZM7 18.5H5V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V18.5H17H7Z"
      fill={fill}
    />
  </svg>
);

IconSave.defaultProps = {
  ...iconDefaultProps,
};

export default IconSave;
