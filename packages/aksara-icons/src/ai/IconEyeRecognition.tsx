import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconEyeRecognition: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 9a1 1 0 001-1V6a1 1 0 011-1h2a1 1 0 000-2H6a3 3 0 00-3 3v2a1 1 0 001 1zM18 3h-2a1 1 0 100 2h2a1 1 0 011 1v2a1 1 0 002 0V6a3 3 0 00-3-3zM20 15a1 1 0 00-1 1v2a1 1 0 01-1 1h-2a1 1 0 000 2h2a3 3 0 003-3v-2a1 1 0 00-1-1zM6 21h2a1 1 0 000-2H6a1 1 0 01-1-1v-2a1 1 0 10-2 0v2a3 3 0 003 3zM5.22 11a2.32 2.32 0 000 2A7.4 7.4 0 0012 17a7.4 7.4 0 006.78-4 2.32 2.32 0 000-2A7.4 7.4 0 0012 7a7.4 7.4 0 00-6.78 4zM15 12a3 3 0 11-5.999 0A3 3 0 0115 12z"
      fill={fill}
    />
  </svg>
);

IconEyeRecognition.defaultProps = {
  ...iconDefaultProps,
};

export default IconEyeRecognition;
