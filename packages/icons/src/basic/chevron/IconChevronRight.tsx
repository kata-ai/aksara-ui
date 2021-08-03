import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconChevronRight: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7.29 20.7a1 1 0 001.418 0l7.99-7.995a.998.998 0 000-1.42L8.709 3.29A1.003 1.003 0 107.29 4.709l7.291 7.286-7.291 7.286a1 1 0 000 1.42z"
      fill={fill}
    />
  </svg>
);

IconChevronRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronRight;
