import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconPayment: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 21h16a1 1 0 000-2H4a1 1 0 000 2zM20.2 14.9a1.998 1.998 0 000-2.83l-8.48-8.48a2 2 0 00-2.83 0l-.5.49 11.32 11.31.49-.49zM9.29 17h8.81l.9-.9L7.69 4.79 3.8 8.68a2 2 0 000 2.83L9.29 17zM5.42 9.74a.5.5 0 01.71 0L8.39 12a.5.5 0 010 .71.51.51 0 01-.7 0l-2.27-2.27a.5.5 0 010-.7z"
      fill={fill}
    />
  </svg>
);

IconPayment.defaultProps = {
  ...iconDefaultProps,
};

export default IconPayment;
