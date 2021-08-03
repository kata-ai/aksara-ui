import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCopy: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H9a2 2 0 00-2 2v2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2h2a2 2 0 002-2V5a2 2 0 00-2-2zm0 12h-2V9a2 2 0 00-2-2H9V5h10v10z"
      fill={fill}
    />
  </svg>
);

IconCopy.defaultProps = {
  ...iconDefaultProps,
};

export default IconCopy;
