import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconClient: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M22 13a10 10 0 10-16.466 7.62c.01-.061.038-.187.038-.187C6.018 18.493 8.722 17 12 17s5.982 1.493 6.428 3.433c0 0 .027.125.038.188A9.974 9.974 0 0022 13zm-4.983-1.997h-1.151L15.464 13h-.014a3.484 3.484 0 01-6.9 0h-.015l-.415-1.997H7.017a1.001 1.001 0 01-1-1.002h.002l1.442-.714a1.003 1.003 0 00.558-.9v-.379a2.003 2.003 0 012-2.005h1.951L12 6l.03.003h1.998a2.002 2.002 0 012 2.005v.381a1.003 1.003 0 00.555.898l1.434.713a1 1 0 01-1 1.003z"
      fill={fill}
    />
  </svg>
);

IconClient.defaultProps = {
  ...iconDefaultProps,
};

export default IconClient;
