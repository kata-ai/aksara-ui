import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconStar: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5.5 9.6l-1.7 1.6c-.2.2-.3.6-.3.9l.4 2.3c.1.8-.7 1.4-1.5 1.1l-2.1-1.1c-.3-.2-.6-.2-.9 0l-2.1 1.1c-.7.4-1.6-.2-1.5-1.1l.4-2.3c.1-.3-.1-.7-.3-.9l-1.4-1.6c-.6-.6-.3-1.6.5-1.7l2.3-.3c.3 0 .6-.3.8-.5l1-2.1c.4-.7 1.4-.7 1.8 0l1 2.1c.1.3.4.5.8.5l2.3.3c.8.1 1.1 1.1.5 1.7z"
      fill={fill}
    />
  </svg>
);

IconStar.defaultProps = {
  ...iconDefaultProps,
};

export default IconStar;
