import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTickSingle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.29 5.79L9 16.086l-4.29-4.248a1 1 0 00-1.71.704 1 1 0 00.29.705l5 4.998a1 1 0 00.71.25 1 1 0 00.71-.29l11-10.996a1.004 1.004 0 10-1.42-1.42z"
      fill={fill}
    />
  </svg>
);

IconTickSingle.defaultProps = {
  ...iconDefaultProps,
};

export default IconTickSingle;
