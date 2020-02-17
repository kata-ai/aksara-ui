import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconMixer: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 7h1.2c.1.4.4.8.7 1.1.5.6 1.3.9 2.1.9 1.3 0 2.4-.8 2.8-2H20c.6 0 1-.4 1-1s-.4-1-1-1h-9.2c-.1-.4-.4-.8-.7-1.1C9.6 3.3 8.8 3 8 3s-1.5.3-2.1.8c-.3.4-.6.8-.7 1.2H4c-.6 0-1 .4-1 1s.4 1 1 1zm14.8 4H20c.6 0 1 .4 1 1s-.4 1-1 1h-1.2c-.1.4-.4.8-.7 1.1-.6.6-1.3.9-2.1.9s-1.5-.3-2.1-.9c-.3-.3-.6-.7-.7-1.1H4c-.6 0-1-.4-1-1s.4-1 1-1h9.2c.2-.4.4-.8.7-1.1.5-.6 1.3-.9 2.1-.9s1.6.3 2.1.9c.3.3.6.7.7 1.1zm1.2 6h-9.2c-.1-.4-.4-.8-.7-1.1-.5-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9c-.3.3-.6.7-.7 1.1H4c-.6 0-1 .4-1 1s.4 1 1 1h1.2c.1.4.4.8.7 1.1.5.6 1.3.9 2.1.9 1.3 0 2.4-.8 2.8-2H20c.6 0 1-.4 1-1s-.4-1-1-1z"
      fill={fill}
    />
  </svg>
);

IconMixer.defaultProps = {
  ...iconDefaultProps,
};

export default IconMixer;
