import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMoneyEuro: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H4a2 2 0 00-2 2v10a2 2 0 002 2h15a3 3 0 003-3V7a2 2 0 00-2-2zM7 17a2.73 2.73 0 000-.5 2.5 2.5 0 00-3-2.45V10a2.5 2.5 0 003-2.5A2.73 2.73 0 007 7h10.1a2.5 2.5 0 002.4 3c.166.015.334.015.5 0v4.1a2.5 2.5 0 00-3 2.4c.001.168.018.335.05.5H7z"
      fill={fill}
    />
    <path
      d="M14.18 10a.75.75 0 10.64-1.35 3.54 3.54 0 00-1.57-.36A3.66 3.66 0 0010 10.28h-.5a.75.75 0 100 1.5h.11a1.46 1.46 0 000 .22 1.46 1.46 0 000 .22H9.5a.75.75 0 100 1.5h.5a3.66 3.66 0 003.22 1.95 3.54 3.54 0 001.57-.36.75.75 0 10-.61-1.31c-.29.139-.608.21-.93.21a2.11 2.11 0 01-1.3-.45h1a.75.75 0 100-1.5h-1.84a1.469 1.469 0 010-.22 1.469 1.469 0 010-.22h1.79a.75.75 0 100-1.5H12a2.11 2.11 0 011.3-.45c.3-.019.599.026.88.13z"
      fill={fill}
    />
  </svg>
);

IconMoneyEuro.defaultProps = {
  ...iconDefaultProps,
};

export default IconMoneyEuro;
