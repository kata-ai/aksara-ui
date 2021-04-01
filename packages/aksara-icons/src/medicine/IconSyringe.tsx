import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSyringe: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 21a1.002 1.002 0 00.711-.29l2.402-2.41a3.625 3.625 0 004.373-.59l6.075-6.07.45.36a1.001 1.001 0 001.41 0 1 1 0 000-1.41l-1.15-1.07-3.773-3.78-1.12-1.11a1 1 0 00-1.808.186A1 1 0 0012.007 6l.41.41-1.671 1.67-4.454 4.44a3.659 3.659 0 00-.59 4.37l-2.412 2.4A1 1 0 004 21zm11.229-9.86L14.008 10l-1.14-1.22.92-.92 2.361 2.36-.92.92zM18.01 3.29a1.001 1.001 0 00-1.41 1.42l.62.62-1 1 1.42 1.42 1.001-1 .62.62A1.002 1.002 0 0020.724 6L18.01 3.29z"
      fill={fill}
    />
  </svg>
);

IconSyringe.defaultProps = {
  ...iconDefaultProps,
};

export default IconSyringe;
