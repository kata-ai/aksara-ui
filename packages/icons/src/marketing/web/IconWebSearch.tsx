import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconWebSearch: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.535 19.125a4.228 4.228 0 00.64-2.22 4.268 4.268 0 10-4.27 4.27 4.228 4.228 0 002.22-.64l1.16 1.17a.999.999 0 001.42 0 1 1 0 000-1.42l-1.17-1.16zm-5.899-2.22a2.269 2.269 0 114.538 0 2.269 2.269 0 01-4.538 0z"
      fill={fill}
    />
    <path
      d="M11.997 2a9.997 9.997 0 000 19.994 1 1 0 100-2 7.909 7.909 0 01-4.319-1.279c2.25-1.72 3.42-6.218 1.05-6.718-1.63-.35-.54-2.25-1.64-3.269a2.53 2.53 0 00-2.199-.37A7.998 7.998 0 0110.248 4.2c.79.89 3.309 1.69 4.198 3.71.89 2.019 3.37 1.169 4.689.5a7.888 7.888 0 01.86 3.588 1 1 0 102 0A9.997 9.997 0 0011.996 2z"
      fill={fill}
    />
  </svg>
);

IconWebSearch.defaultProps = {
  ...iconDefaultProps,
};

export default IconWebSearch;
