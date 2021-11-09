import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconRedCross: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 9h-5V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H4a1 1 0 00-1 1v4a1 1 0 001 1h5v5a1 1 0 001 1h4a1 1 0 001-1v-5h5a1 1 0 001-1v-4a1 1 0 00-1-1z"
      fill={fill}
    />
  </svg>
);

IconRedCross.defaultProps = {
  ...iconDefaultProps,
};

export default IconRedCross;
