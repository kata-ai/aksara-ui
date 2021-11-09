import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconEntities: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.8 2.2 2.7 3.4 1.4L6.8 17H20c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-3 7H7c-.5 0-1-.4-1-1s.4-1 1-1h10c.6 0 1 .4 1 1s-.4 1-1 1z"
      fill={fill}
    />
  </svg>
);

IconEntities.defaultProps = {
  ...iconDefaultProps,
};

export default IconEntities;
