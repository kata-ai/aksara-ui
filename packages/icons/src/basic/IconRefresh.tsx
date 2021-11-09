import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconRefresh: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 4C7.83 4 4 7.865 4 12.7c0 2.526 1.066 4.734 2.72 6.3H6.6a1 1 0 100 2h3a1 1 0 001-1v-3a1 1 0 10-2 0v.982C7.03 16.758 6 14.877 6 12.7 6 8.935 8.97 6 12.5 6S19 8.935 19 12.7c0 2.959-2.01 5.565-4.679 6.34a1 1 0 10.558 1.92C18.409 19.935 21 16.541 21 12.7 21 7.865 17.17 4 12.5 4z"
      fill={fill}
    />
  </svg>
);

IconRefresh.defaultProps = {
  ...iconDefaultProps,
};

export default IconRefresh;
