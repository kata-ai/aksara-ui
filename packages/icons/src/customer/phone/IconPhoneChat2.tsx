import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPhoneChat2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.311 15.526l-3.996-1.608a1.079 1.079 0 00-1.148.24l-1.11 1.109a1.059 1.059 0 01-1.328.15 14.985 14.985 0 01-4.155-4.156 1.059 1.059 0 01.15-1.329l1.208-1.208a1.089 1.089 0 00.29-.94l-.7-3.905A1.059 1.059 0 008.525 3H5.138A2.148 2.148 0 003 5.437 18.14 18.14 0 0018.543 20.98a2.15 2.15 0 002.437-2.137v-2.048c0-.72-.27-1.109-.669-1.269z"
      fill={fill}
    />
    <path
      d="M16.985 3a3.996 3.996 0 00-3.996 3.996c.005.63.163 1.25.46 1.808l-.46 1.788a.34.34 0 00.38.4l1.838-.45v-.05a3.886 3.886 0 001.778.5 3.996 3.996 0 000-7.992z"
      fill={fill}
    />
  </svg>
);

IconPhoneChat2.defaultProps = {
  ...iconDefaultProps,
};

export default IconPhoneChat2;
