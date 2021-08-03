import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDNA: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.71 15.29a1 1 0 00-.23.37A10.51 10.51 0 005 21a1 1 0 102 0h10a1 1 0 002 0 10.51 10.51 0 00-1.48-5.34 1 1 0 00-.23-.37 9.92 9.92 0 00-3-3l-.36-.29A10.32 10.32 0 0019 3.09V3a1 1 0 10-2 0H7a1 1 0 00-2 0 10.32 10.32 0 005.07 9l-.34.22a9.92 9.92 0 00-3.02 3.07zM7.25 19A8.309 8.309 0 018 17h8c.335.632.587 1.304.75 2h-9.5zm9.52-14A8.702 8.702 0 0116 7H8a8.7 8.7 0 01-.73-2h9.5zM9.39 9h5.22a7.83 7.83 0 01-1.7 1.32l-.91.53-.91-.53A8.15 8.15 0 019.39 9zm1.41 4.94l1.2-.76 1.2.77c.468.305.904.657 1.3 1.05h-5a8.852 8.852 0 011.3-1.06z"
      fill={fill}
    />
  </svg>
);

IconDNA.defaultProps = {
  ...iconDefaultProps,
};

export default IconDNA;
