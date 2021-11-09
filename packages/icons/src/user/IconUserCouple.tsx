import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserCouple: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.75 12.75H15a3.75 3.75 0 00-3 1.5 3.75 3.75 0 00-3-1.5H5.25A3.75 3.75 0 001.5 16.5v2.25a.75.75 0 101.5 0V16.5a2.25 2.25 0 012.25-2.25H9a2.25 2.25 0 012.25 2.25v2.25a.75.75 0 101.5 0V16.5A2.25 2.25 0 0115 14.25h3.75A2.25 2.25 0 0121 16.5v2.25a.75.75 0 101.5 0V16.5a3.75 3.75 0 00-3.75-3.75zM7.125 11.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM16.875 11.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75z"
      fill={fill}
    />
  </svg>
);

IconUserCouple.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserCouple;
