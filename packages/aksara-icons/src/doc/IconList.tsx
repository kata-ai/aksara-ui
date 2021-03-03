import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconList: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6 17c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm12 8H9c-.6 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1s-.4 1-1 1zm0-4H9c-.6 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1s-.4 1-1 1zm0-4H9c-.5 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1s-.4 1-1 1z"
      fill={fill}
    />
  </svg>
);

IconList.defaultProps = {
  ...iconDefaultProps,
};

export default IconList;
