import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconFlag2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 21h.06A.998.998 0 006 19.94l-1-16a1 1 0 00-1.438-.841A1 1 0 003 4.06l1 16A1 1 0 005 21zM20 14a1 1 0 00.93-1.37l-1.31-3.26a1 1 0 010-.74l1.31-3.26A1 1 0 0020 4H7l.62 10H20z"
      fill={fill}
    />
  </svg>
);

IconFlag2.defaultProps = {
  ...iconDefaultProps,
};

export default IconFlag2;
