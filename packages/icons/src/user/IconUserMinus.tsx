import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserMinus: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5.246 20.996h9.75a2.25 2.25 0 002.25-2.25v-.75a6 6 0 00-6-6h-2.25a6 6 0 00-6 6v.75a2.25 2.25 0 002.25 2.25zM10.121 10.496a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM20.996 7.496a.75.75 0 00-.75-.75h-4.5a.75.75 0 100 1.5h4.5a.75.75 0 00.75-.75z"
      fill={fill}
    />
  </svg>
);

IconUserMinus.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserMinus;
