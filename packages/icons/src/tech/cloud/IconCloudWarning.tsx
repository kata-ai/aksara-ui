import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCloudWarning: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.841 11.3v-.08a6.312 6.312 0 00-1.92-4.433A6.344 6.344 0 0012.426 5a6.386 6.386 0 00-3.914 1.295 6.36 6.36 0 00-2.3 3.415 4.675 4.675 0 00-3.06 1.64 4.653 4.653 0 00.416 6.417A4.678 4.678 0 006.812 19h11.227a3.895 3.895 0 002.688-.952 3.877 3.877 0 00.548-5.265 3.891 3.891 0 00-2.434-1.483zM12.024 17a1.004 1.004 0 01-.926-.617.997.997 0 01.73-1.364 1.006 1.006 0 011.03.425.998.998 0 01-.834 1.556zm1.685-7l-.502 3a1.2 1.2 0 01-1.183.982A1.204 1.204 0 0110.842 13l-.502-3a1.697 1.697 0 01.972-1.804 1.707 1.707 0 012.351 1.078c.068.236.083.484.046.726z"
      fill={fill}
    />
  </svg>
);

IconCloudWarning.defaultProps = {
  ...iconDefaultProps,
};

export default IconCloudWarning;
