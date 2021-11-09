import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconImage: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H19C20.1 3 21 3.9 20.9 5V16.7L18.9 14.7L18.2 14C17.8 13.6 17.4 13.4 16.8 13.4C16.3 13.4 15.8 13.6 15.4 14L14.1 15.4L10.5 11.2C10.1 10.8 9.6 10.5 9 10.5C8.4 10.5 7.9 10.8 7.5 11.2L5 13.8L3 15.9V5C3 3.9 3.9 3 5 3ZM13 9C13 10.1 13.9 11 15 11C16.1 11 17 10.1 17 9C17 7.9 16.1 7 15 7C13.9 7 13 7.9 13 9ZM15.6 16.8L16.9 15.4L19 17.5L20.9 19.4C20.7 20.3 20 21 19 21H5C3.9 21 3 20.1 3 19V18.8L5 16.7L9 12.5L12.6 16.6C12.9 17 13.4 17.3 14 17.4C14.6 17.5 15.2 17.2 15.6 16.8Z"
      fill={fill}
    />
  </svg>
);

IconImage.defaultProps = {
  ...iconDefaultProps,
};

export default IconImage;
