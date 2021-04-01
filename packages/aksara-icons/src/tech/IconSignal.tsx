import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSignal: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15.095 16.08a1.002 1.002 0 00.886-1.467 1 1 0 00-.246-.303 5.934 5.934 0 00-7.433 0 1.001 1.001 0 101.28 1.54 3.833 3.833 0 014.872 0 1 1 0 00.64.23z"
      fill={fill}
    />
    <path
      d="M17.566 13a1.001 1.001 0 00.959-.702 1 1 0 00-.309-1.068 9.616 9.616 0 00-12.365 0 1 1 0 001.27 1.54 7.605 7.605 0 019.804 0 1 1 0 00.64.23z"
      fill={fill}
    />
    <path
      d="M12.004 5A13.519 13.519 0 003.4 8.12a1 1 0 00.162 1.649 1 1 0 001.109-.109A11.387 11.387 0 0112.004 7c2.706.007 5.323.966 7.392 2.71a1 1 0 001.291-1.53A13.569 13.569 0 0012.003 5zM11.383 17.23a1 1 0 00-.38.77 1 1 0 101.902-.427 1.001 1.001 0 00-.271-.343 1.001 1.001 0 00-.63-.23 1 1 0 00-.62.23z"
      fill={fill}
    />
  </svg>
);

IconSignal.defaultProps = {
  ...iconDefaultProps,
};

export default IconSignal;
