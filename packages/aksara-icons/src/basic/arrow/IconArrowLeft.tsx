import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconArrowLeft: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2 12.03c0 .3.14.56.34.739L8.26 18.7c.38.4 1.02.4 1.42 0 .4-.379.4-1.018 0-1.418l-4.24-4.254H21c.56 0 1-.439 1-.998a.99.99 0 00-1-.999H5.42l4.3-4.313c.38-.4.38-1.019 0-1.418-.2-.2-.46-.3-.7-.3-.26 0-.52.1-.7.3L2.36 11.27c-.22.2-.36.46-.36.759z"
      fill={fill}
    />
  </svg>
);

IconArrowLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowLeft;
