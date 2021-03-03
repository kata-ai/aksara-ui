import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDoc: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H9a2 2 0 00-2 2v13.002A1 1 0 015 18V8.003a1 1 0 00-2 0V19.001a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-.991 14.29H9.992a1 1 0 110-2h8.017a1 1 0 010 2zm0-4.29H9.992a1 1 0 110-2h8.017a1 1 0 010 2zm0-4H9.992a1 1 0 010-2h8.017a1 1 0 110 2z"
      fill={fill}
    />
  </svg>
);

IconDoc.defaultProps = {
  ...iconDefaultProps,
};

export default IconDoc;
