import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconLid: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 17H3a1 1 0 000 2h18a1 1 0 000-2zM4 15h16a8 8 0 00-6.38-7.84A1.92 1.92 0 0014 6a2 2 0 10-4 0c-.003.418.13.825.38 1.16A8 8 0 004 15z"
      fill={fill}
    />
  </svg>
);

IconLid.defaultProps = {
  ...iconDefaultProps,
};

export default IconLid;
