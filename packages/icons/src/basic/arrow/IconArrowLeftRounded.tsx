import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconArrowLeftRounded: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm4 11h-5.58l2.29 2.29a1.002 1.002 0 01-.325 1.639 1 1 0 01-1.095-.219l-4-4a1 1 0 01-.23-.34.88.88 0 01-.06-.26V12a1.09 1.09 0 01.08-.39s0-.06.06-.1c.06-.04.09-.15.15-.22l4-4a1 1 0 111.41 1.42L10.41 11H16a1 1 0 010 2zM7 12zM7.08 12.38z"
      fill={fill}
    />
  </svg>
);

IconArrowLeftRounded.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowLeftRounded;
