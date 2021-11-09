import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconChevronUp: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4.71 16.699l7.285-7.292 7.286 7.292a1 1 0 001.42 0 .997.997 0 000-1.419l-7.996-7.99a1 1 0 00-1.42 0L3.29 15.28A1.003 1.003 0 104.71 16.7z"
      fill={fill}
    />
  </svg>
);

IconChevronUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronUp;
