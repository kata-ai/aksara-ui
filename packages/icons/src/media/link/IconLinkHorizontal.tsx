import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconLinkHorizontal: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9.93 15H7a3 3 0 010-6h3a1 1 0 100-2H7a5 5 0 100 10h2.93a1 1 0 000-2zM17 7h-3a1 1 0 100 2h3a3 3 0 010 6h-3a1 1 0 000 2h3a5 5 0 100-10z"
      fill={fill}
    />
    <path d="M7 12a1 1 0 001 1h7a1 1 0 000-2H8a1 1 0 00-1 1z" fill={fill} />
  </svg>
);

IconLinkHorizontal.defaultProps = {
  ...iconDefaultProps,
};

export default IconLinkHorizontal;
