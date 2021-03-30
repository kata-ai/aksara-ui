import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconRedCrossBox: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 10a1 1 0 01-1 1h-3v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3H7a1 1 0 01-1-1v-2a1 1 0 011-1h3V7a1 1 0 011-1h2a1 1 0 011 1v3h3a1 1 0 011 1v2z"
      fill={fill}
    />
  </svg>
);

IconRedCrossBox.defaultProps = {
  ...iconDefaultProps,
};

export default IconRedCrossBox;
