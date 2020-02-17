import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSearch: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.683 19.265l-3.405-3.405a7.988 7.988 0 10-1.418 1.418l3.405 3.405a1 1 0 001.636-.325.998.998 0 00-.218-1.093zM4.997 10.988a5.99 5.99 0 1111.981 0 5.99 5.99 0 01-11.981 0z"
      fill={fill}
    />
  </svg>
);

IconSearch.defaultProps = {
  ...iconDefaultProps,
};

export default IconSearch;
