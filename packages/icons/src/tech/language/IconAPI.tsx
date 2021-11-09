import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconAPI: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15.94 10.74a1.25 1.25 0 00-1.25-1.25H13V12h1.69a1.251 1.251 0 001.25-1.26zM8.08 10.32l-1.13 2.66h2.19l-1.06-2.66z"
      fill={fill}
    />
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM5.07 14.81l2.57-6a.51.51 0 01.46-.3.5.5 0 01.46.31l2.36 6a.481.481 0 01-.28.64.5.5 0 01-.65-.28L9.53 14h-3L6 15.2a.5.5 0 01-.46.31.788.788 0 01-.2 0 .51.51 0 01-.27-.7zM12 15V9a.5.5 0 01.5-.5h2.19a2.25 2.25 0 010 4.5H13v2a.5.5 0 01-1 0zm7 0a.51.51 0 01-.5.5.5.5 0 01-.5-.5V9a.5.5 0 011 0v6z"
      fill={fill}
    />
  </svg>
);

IconAPI.defaultProps = {
  ...iconDefaultProps,
};

export default IconAPI;
