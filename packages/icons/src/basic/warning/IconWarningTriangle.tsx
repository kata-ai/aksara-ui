import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconWarningTriangle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.8 18L13.9 4.2c-.8-1.5-3-1.5-3.7 0L3.2 18c-.7 1.4.3 3 1.9 3h13.8c1.6 0 2.6-1.6 1.9-3zm-8.8.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1.7-9l-.7 5c0 .6-.4 1-1 1s-1-.4-1-1l-.7-5c-.1-.7.4-2 1.7-2 1.2 0 1.8 1.4 1.7 2z"
      fill={fill}
    />
  </svg>
);

IconWarningTriangle.defaultProps = {
  ...iconDefaultProps,
};

export default IconWarningTriangle;
