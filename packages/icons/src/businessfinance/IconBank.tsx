import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBank: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.08 6.336L12.29 3.09a.729.729 0 00-.58 0L3.92 6.336A1.51 1.51 0 003 7.728V9.26a.762.762 0 00.75.752h16.5A.76.76 0 0021 9.26V7.728a1.514 1.514 0 00-.92-1.392zM20 18.025h-1v-6.01h-2v6.01h-2v-6.01h-2v6.01h-2v-6.01H9v6.01H7v-6.01H5v6.01H4a1 1 0 00-1 1.002v1.001a1.003 1.003 0 001 1.002h16a1 1 0 001-1.002v-1.001a1.003 1.003 0 00-1-1.002z"
      fill={fill}
    />
  </svg>
);

IconBank.defaultProps = {
  ...iconDefaultProps,
};

export default IconBank;
