import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMoneyDollar: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zM7 17a2.73 2.73 0 000-.5 2.5 2.5 0 00-3-2.45V10a2.5 2.5 0 003-2.5A2.73 2.73 0 007 7h10.1a2.5 2.5 0 002.4 3c.166.015.334.015.5 0v4.1a2.5 2.5 0 00-3 2.4c.001.168.018.335.05.5H7z"
      fill={fill}
    />
    <path
      d="M13.24 11.58a4.882 4.882 0 00-1.18-.32l-.44-.08c-.17 0-.37-.12-.37-.3s.28-.38.75-.38a.87.87 0 01.74.32.75.75 0 101.35-.64 2.12 2.12 0 00-1.34-1.07V9a.75.75 0 10-1.5 0v.11a1.91 1.91 0 00-1.5 1.77 1.82 1.82 0 001.53 1.76l.53.1c.288.034.57.105.84.21.06 0 .1.05.1.17 0 .12-.28.38-.75.38a.87.87 0 01-.74-.32.75.75 0 10-1.35.64 2.119 2.119 0 001.34 1.07V15a.75.75 0 101.5 0v-.11a1.9 1.9 0 001.5-1.77 1.61 1.61 0 00-1.01-1.54z"
      fill={fill}
    />
  </svg>
);

IconMoneyDollar.defaultProps = {
  ...iconDefaultProps,
};

export default IconMoneyDollar;
