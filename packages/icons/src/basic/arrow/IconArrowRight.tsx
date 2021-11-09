import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconArrowRight: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M22 11.97c0-.3-.14-.56-.34-.739L15.74 5.3a.991.991 0 00-1.42 0 .988.988 0 000 1.418l4.24 4.254H3c-.56 0-1 .439-1 .998 0 .56.44.999 1 .999h15.58l-4.3 4.313c-.38.4-.38 1.019 0 1.418.2.2.46.3.7.3.26 0 .52-.1.7-.3l5.96-5.971c.22-.2.36-.46.36-.759z"
      fill={fill}
    />
  </svg>
);

IconArrowRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowRight;
