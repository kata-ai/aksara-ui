import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUnlabel: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.996 14.465l2.555 1.703a1 1 0 11-1.11 1.664l-18-12a1 1 0 011.11-1.664l1.445.964v-.073a2.03 2.03 0 012-2.059h10a2.03 2.03 0 012 2.059v9.406zM5.107 20.452a1.003 1.003 0 01-.111-.483V9.94l14 9.334v.696a1.002 1.002 0 01-1.394.947l-4.59-1.207a3.998 3.998 0 00-2.033 0l-4.59 1.207a1.003 1.003 0 01-1.282-.464z"
      fill={fill}
    />
  </svg>
);

IconUnlabel.defaultProps = {
  ...iconDefaultProps,
};

export default IconUnlabel;
