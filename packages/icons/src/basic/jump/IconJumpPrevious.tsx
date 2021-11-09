import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconJumpPrevious: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.373 3.071a1 1 0 01.326.219 1 1 0 010 1.419l-7.295 7.285 7.295 7.285a1 1 0 010 1.42.999.999 0 01-1.42 0l-7.994-7.995a.999.999 0 010-1.42L17.28 3.29a1 1 0 011.093-.219zM3.29 11.285l7.994-7.995a1.003 1.003 0 111.419 1.419l-7.295 7.285 7.295 7.285a.998.998 0 010 1.42.998.998 0 01-1.42 0L3.29 12.704a.999.999 0 010-1.42z"
      fill={fill}
    />
  </svg>
);

IconJumpPrevious.defaultProps = {
  ...iconDefaultProps,
};

export default IconJumpPrevious;
