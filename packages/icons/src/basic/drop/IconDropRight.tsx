import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconDropRight: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7.621 3.08a1 1 0 00-.62.92v16a1 1 0 00.62.92.998.998 0 001.09-.21l7.995-8a1.002 1.002 0 000-1.42l-7.995-8a1 1 0 00-1.09-.21z"
      fill={fill}
    />
  </svg>
);

IconDropRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconDropRight;
