import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDictionary: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 7v5l-1.5-.8c-.3-.1-.6-.1-.9 0L14 12V7H7c-.5 0-1-.4-1-1s.4-1 1-1h8c.6 0 1-.4 1-1s-.4-1-1-1H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"
      fill={fill}
    />
  </svg>
);

IconDictionary.defaultProps = {
  ...iconDefaultProps,
};

export default IconDictionary;
