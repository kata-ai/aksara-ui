import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserAdd: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 12a6 6 0 00-6 6v.75A2.25 2.25 0 005.25 21H15a2.25 2.25 0 002.25-2.25V18a6 6 0 00-6-6H9zM10.125 10.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM20.25 6.75h-1.5v-1.5a.75.75 0 10-1.5 0v1.5h-1.5a.75.75 0 100 1.5h1.5v1.5a.75.75 0 101.5 0v-1.5h1.5a.75.75 0 100-1.5z"
      fill={fill}
    />
  </svg>
);

IconUserAdd.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserAdd;
