import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBubbleLove: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.989 3a8.981 8.981 0 00-8.223 5.316A9.01 9.01 0 005.267 18L3.27 19.77A.75.75 0 003.749 21h8.24c2.384 0 4.67-.948 6.356-2.636a9.005 9.005 0 000-12.728A8.984 8.984 0 0011.99 3zm3.306 9.48l-2.836 2.83a.679.679 0 01-.94 0l-2.836-2.83a2.32 2.32 0 010-3.3 2.346 2.346 0 013.306 0 2.346 2.346 0 013.815.756 2.321 2.321 0 01-.509 2.544z"
      fill={fill}
    />
  </svg>
);

IconBubbleLove.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubbleLove;
