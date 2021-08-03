import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconClose: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.615 18.92a1 1 0 01-.325-.22.999.999 0 010-1.419l5.295-5.286L5.29 6.71a1.003 1.003 0 011.419-1.42l5.285 5.297L17.28 5.29a1.003 1.003 0 111.419 1.419l-5.296 5.286 5.296 5.286a1 1 0 010 1.42.998.998 0 01-1.42 0l-5.285-5.297L6.71 18.7a1 1 0 01-1.094.22z"
      fill={fill}
    />
  </svg>
);

IconClose.defaultProps = {
  ...iconDefaultProps,
};

export default IconClose;
