import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBarcodeQR: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.75 3h-1.5A2.25 2.25 0 003 5.25v1.5A2.25 2.25 0 005.25 9h1.5A2.25 2.25 0 009 6.75v-1.5A2.25 2.25 0 006.75 3zM18.75 3h-1.5A2.25 2.25 0 0015 5.25v1.5A2.25 2.25 0 0017.25 9h1.5A2.25 2.25 0 0021 6.75v-1.5A2.25 2.25 0 0018.75 3zM6.75 15h-1.5A2.25 2.25 0 003 17.25v1.5A2.25 2.25 0 005.25 21h1.5A2.25 2.25 0 009 18.75v-1.5A2.25 2.25 0 006.75 15z"
      fill={fill}
    />
    <path
      d="M3.5 11a1 1 0 001 1h6a1 1 0 001-1V4.55a1 1 0 00-2 0V10h-5a1 1 0 00-1 1zM17.52 16h-3V4.47a1 1 0 10-2 0V17a1 1 0 001 1h4a1 1 0 000-2z"
      fill={fill}
    />
    <path
      d="M10.73 21H20a1 1 0 001-1v-5a1 1 0 00-2 0v4h-8.27a1 1 0 000 2zM20.43 10.5H17a1 1 0 00-1 1V14a1 1 0 002 0v-1.5h2.43a1 1 0 000-2zM10.5 17a1 1 0 001-1v-2a1 1 0 00-2 0v2a1 1 0 001 1z"
      fill={fill}
    />
  </svg>
);

IconBarcodeQR.defaultProps = {
  ...iconDefaultProps,
};

export default IconBarcodeQR;
