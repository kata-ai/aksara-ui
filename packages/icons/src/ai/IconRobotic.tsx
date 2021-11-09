import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconRobotic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6 10h.15l2.19 6.91c-.22.321-.339.7-.34 1.09H7a2 2 0 00-2 2v1h10v-1a2 2 0 00-2-2h-1a2 2 0 00-1.84-2L8 9.22A3 3 0 008.82 8h4.64l1.71 2.56A1 1 0 0016 11h.24l4-1a1.028 1.028 0 10-.48-2l-3.32.83L15.2 7l1.24-1.86 3.32.86a1.029 1.029 0 00.48-2l-4-1a1 1 0 00-1.07.41L13.46 6H8.82A3 3 0 106 10z"
      fill={fill}
    />
  </svg>
);

IconRobotic.defaultProps = {
  ...iconDefaultProps,
};

export default IconRobotic;
