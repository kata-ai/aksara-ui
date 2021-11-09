import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCollection: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17 2H7a2 2 0 00-2 2v17a1 1 0 001 1 1 1 0 00.4-.08l5.11-2.22a.9.9 0 01.4-.08 1 1 0 01.38.07l5.32 2.25A.91.91 0 0018 22a1 1 0 001-1V4a2 2 0 00-2-2zm0 17.49l-3.93-1.66a3.08 3.08 0 00-2.36 0L7 19.46V4h10v15.49z"
      fill={fill}
    />
  </svg>
);

IconCollection.defaultProps = {
  ...iconDefaultProps,
};

export default IconCollection;
