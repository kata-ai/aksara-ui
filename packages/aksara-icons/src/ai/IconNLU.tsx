import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconNLU: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 14h-1v-4h1c.6 0 1-.4 1-1s-.4-1-1-1h-1V7c0-1.1-.9-2-2-2h-1V4c0-.6-.4-1-1-1s-1 .4-1 1v1h-4V4c0-.6-.4-1-1-1s-1 .4-1 1v1H7c-1.1 0-2 .9-2 2v1H4c-.6 0-1 .4-1 1s.4 1 1 1h1v4H4c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 1.1.9 2 2 2h1v1c0 .6.4 1 1 1s1-.4 1-1v-1h4v1c0 .6.4 1 1 1s1-.4 1-1v-1h1c1.1 0 2-.9 2-2v-1h1c.6 0 1-.4 1-1s-.4-1-1-1zm-11.9.7c-.1-.1-.1-.2-.1-.4V10c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v3.3c0 .6-.4 1-1 1H9.7l-.5.5c-.3.3-.7.3-1 0l-.1-.1z"
      fill={fill}
    />
  </svg>
);

IconNLU.defaultProps = {
  ...iconDefaultProps,
};

export default IconNLU;
