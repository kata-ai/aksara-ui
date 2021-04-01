import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconLinkVertical: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M13 5a1 1 0 00-1 1v7a5 5 0 11-10 0V5a3 3 0 116 0v7a1 1 0 11-2 0V6a1 1 0 00-2 0v6a3 3 0 006 0V5A5 5 0 100 5v8a7 7 0 1014 0V6a1 1 0 00-1-1z"
      fill={fill}
    />
  </svg>
);

IconLinkVertical.defaultProps = {
  ...iconDefaultProps,
};

export default IconLinkVertical;
