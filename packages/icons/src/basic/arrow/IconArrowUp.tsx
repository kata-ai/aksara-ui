import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconArrowUp: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.97 2c-.3 0-.56.14-.739.34L5.3 8.26c-.4.38-.4 1.02 0 1.42.379.4 1.018.4 1.418 0l4.254-4.24V21c0 .56.439 1 .998 1a.99.99 0 00.999-1V5.42l4.313 4.3c.4.38 1.019.38 1.418 0 .2-.2.3-.46.3-.7 0-.26-.1-.52-.3-.7L12.73 2.36c-.2-.22-.46-.36-.759-.36z"
      fill={fill}
    />
  </svg>
);

IconArrowUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowUp;
