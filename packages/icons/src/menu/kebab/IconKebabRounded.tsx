import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconKebabRounded: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-5.51a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM12 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
      fill={fill}
    />
  </svg>
);

IconKebabRounded.defaultProps = {
  ...iconDefaultProps,
};

export default IconKebabRounded;
