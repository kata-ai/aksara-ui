import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMoneyBitcoin: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zM7 17a2.73 2.73 0 000-.5 2.5 2.5 0 00-3-2.45V10a2.5 2.5 0 003-2.5A2.73 2.73 0 007 7h10.1a2.5 2.5 0 002.4 3c.166.015.334.015.5 0v4.1a2.5 2.5 0 00-3 2.4c.001.168.018.335.05.5H7z"
      fill={fill}
    />
    <path
      d="M12.54 8.71v-.14a.75.75 0 10-1.5 0v.11h-.54a.75.75 0 00-.75.75v5.14a.75.75 0 00.75.75h.5v.11a.75.75 0 101.5 0v-.14A2 2 0 0013.78 12a2 2 0 00-1.24-3.29zm-.33 5.11h-1v-1.07h1a.54.54 0 110 1.07zm-1-2.57v-1.07h1a.54.54 0 110 1.07h-1z"
      fill={fill}
    />
  </svg>
);

IconMoneyBitcoin.defaultProps = {
  ...iconDefaultProps,
};

export default IconMoneyBitcoin;
