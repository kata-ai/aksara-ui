import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBubble5: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4.5 21H12a9 9 0 10-9-9v7.5A1.5 1.5 0 004.5 21zM16 11a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2z"
      fill={fill}
    />
  </svg>
);

IconBubble5.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubble5;
