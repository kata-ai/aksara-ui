import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconArrowRightRounded: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.92 10.39a.757.757 0 01-.08.11.919.919 0 01-.13.21l-4 4A1 1 0 0112 17a1 1 0 01-.71-1.71l2.3-2.29H8a1 1 0 010-2h5.58l-2.29-2.29a1.004 1.004 0 111.42-1.42l4 4a1 1 0 01.22.33.94.94 0 01.06.28v.1c0 .133-.023.265-.07.39zM17 12zM16.92 11.62z"
      fill={fill}
    />
  </svg>
);

IconArrowRightRounded.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowRightRounded;
