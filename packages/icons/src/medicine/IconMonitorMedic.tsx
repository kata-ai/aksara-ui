import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconMonitorMedic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zm1-7h3a1.001 1.001 0 01.71.29l.62.63.67-4.08a1 1 0 01.79-.84 1 1 0 011 .43L14.54 9H18a1 1 0 110 2h-4a1 1 0 01-.83-.45l-.6-.89-.57 3.5a1 1 0 01-1 .84 1 1 0 01-.71-.29L8.59 12H6a1 1 0 010-2zM11 19a1 1 0 01-1 1H8a1 1 0 000 2h8a1 1 0 000-2h-2a1 1 0 01-1-1h-2z"
      fill={fill}
    />
  </svg>
);

IconMonitorMedic.defaultProps = {
  ...iconDefaultProps,
};

export default IconMonitorMedic;
