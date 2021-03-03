import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconForward: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.92 10.12a1.001 1.001 0 00-.21-.33l-6-6a1.003 1.003 0 10-1.42 1.42l4.3 4.29H8a5 5 0 00-5 5v5a1 1 0 102 0v-5a3 3 0 013-3h9.59l-4.3 4.29a1.001 1.001 0 001.094 1.636 1 1 0 00.326-.216l6-6a1 1 0 00.21-.33 1 1 0 000-.76z"
      fill={fill}
    />
  </svg>
);

IconForward.defaultProps = {
  ...iconDefaultProps,
};

export default IconForward;
