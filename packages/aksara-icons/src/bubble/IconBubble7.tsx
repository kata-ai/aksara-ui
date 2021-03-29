import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBubble7: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 3H4a1 1 0 000 2h16a1 1 0 100-2zM20 7H4a1 1 0 000 2h16a1 1 0 100-2zM20 11H4a1 1 0 000 2h16a1 1 0 000-2zM20 15h-8a1.08 1.08 0 00-.62.21l-3.81 3L7 15.75A1 1 0 006 15H4a1 1 0 000 2h1.22L6 20.21a1 1 0 00.65.7c.111.049.23.079.35.09a1 1 0 00.62-.21L12.37 17H20a1 1 0 000-2z"
      fill={fill}
    />
  </svg>
);

IconBubble7.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubble7;
