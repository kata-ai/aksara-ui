import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMoneyPound: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zM7 17a2.73 2.73 0 000-.5 2.5 2.5 0 00-3-2.45V10a2.5 2.5 0 003-2.5A2.73 2.73 0 007 7h10.1a2.5 2.5 0 002.4 3c.166.015.334.015.5 0v4.1a2.5 2.5 0 00-3 2.4c.001.168.018.335.05.5H7z"
      fill={fill}
    />
    <path
      d="M11.74 13.43c.09-.2.18-.44.27-.68h1.12a.75.75 0 100-1.5h-.7a.84.84 0 01.3-.56.94.94 0 01.61-.11.75.75 0 00.79-1.137.76.76 0 00-.47-.333 2.46 2.46 0 00-1.76.33 2.36 2.36 0 00-1 1.61c.005.067.005.133 0 .2a.75.75 0 00-.662 1.097.73.73 0 00.242.263 8.485 8.485 0 01-.59 1.16.75.75 0 00.63 1.16h3a.75.75 0 100-1.5h-1.78z"
      fill={fill}
    />
  </svg>
);

IconMoneyPound.defaultProps = {
  ...iconDefaultProps,
};

export default IconMoneyPound;
