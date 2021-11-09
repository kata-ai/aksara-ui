import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMoneyIDR: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zM7 17a2.73 2.73 0 000-.5 2.5 2.5 0 00-3-2.45V10a2.5 2.5 0 003-2.5A2.73 2.73 0 007 7h10.1a2.5 2.5 0 002.4 3c.166.015.334.015.5 0v4.1a2.5 2.5 0 00-3 2.4c.001.168.018.335.05.5H7z"
      fill={fill}
    />
    <path
      d="M11.87 10.69a2.07 2.07 0 00-2.06-2.07H8.5a.76.76 0 00-.75.76v4.37a.75.75 0 101.5 0v-.81l1.34 1.34a.77.77 0 001.07 0 .75.75 0 000-1.06l-.78-.77a2 2 0 00.99-1.76zm-2.06.56h-.56v-1.13h.56a.57.57 0 01.56.57.56.56 0 01-.56.56zM14.19 10.38h-1.32a.75.75 0 00-.75.74v3.5a.75.75 0 101.5 0v-.12h.57a2.06 2.06 0 100-4.12zm0 2.62h-.57v-1.12h.57a.56.56 0 010 1.12z"
      fill={fill}
    />
  </svg>
);

IconMoneyIDR.defaultProps = {
  ...iconDefaultProps,
};

export default IconMoneyIDR;
