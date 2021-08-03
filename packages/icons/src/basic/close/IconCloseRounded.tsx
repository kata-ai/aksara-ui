import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCloseRounded: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.71 13.71a1.002 1.002 0 01-1.42 0L12 13.41l-2.29 2.3A1 1 0 019 16a1 1 0 01-.71-1.71l2.3-2.29-2.27-2.29A1 1 0 019.74 8.3L12 10.58l2.26-2.27a1 1 0 111.42 1.41L13.41 12l2.3 2.31a1 1 0 010 1.4z"
      fill={fill}
    />
  </svg>
);

IconCloseRounded.defaultProps = {
  ...iconDefaultProps,
};

export default IconCloseRounded;
