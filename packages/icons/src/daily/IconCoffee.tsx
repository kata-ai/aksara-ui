import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCoffee: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6 7a1 1 0 001-1V4a1 1 0 00-2 0v2a1 1 0 001 1zM10 7a1 1 0 001-1V4a1 1 0 00-2 0v2a1 1 0 001 1zM14 7a1 1 0 001-1V4a1 1 0 00-2 0v2a1 1 0 001 1zM17.13 9H4.36a1 1 0 00-1 .68 26.43 26.43 0 00-.1 8.65l.13.89a2 2 0 002 1.78h8.28a2 2 0 002-1.78l.13-.89c.07-.41.1-.83.14-1.25a4.08 4.08 0 001.16.19 4.14 4.14 0 100-8.27h.03zm0 6.27a2.08 2.08 0 01-1-.28 26.684 26.684 0 00-.2-4h1.22a2.141 2.141 0 110 4.27l-.02.01z"
      fill={fill}
    />
  </svg>
);

IconCoffee.defaultProps = {
  ...iconDefaultProps,
};

export default IconCoffee;
