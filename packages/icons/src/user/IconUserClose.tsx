import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserClose: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.25 12H9a6 6 0 00-6 6v.75A2.25 2.25 0 005.25 21H15a2.25 2.25 0 002.25-2.25V18a6 6 0 00-6-6zM10.125 10.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM20.768 5.237a.8.8 0 00-1.137 0l-1.129 1.137-1.128-1.137a.805.805 0 00-1.137 1.137l1.137 1.128-1.137 1.13A.8.8 0 0016.805 10a.8.8 0 00.569-.232l1.128-1.137 1.13 1.137a.8.8 0 00.567.232.8.8 0 00.569-1.369L19.63 7.502l1.137-1.128a.8.8 0 000-1.137z"
      fill={fill}
    />
  </svg>
);

IconUserClose.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserClose;
