import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTextBox: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2.5 7H13v6.5c0 .6-.4 1-1 1s-1-.4-1-1V10H7.5c-.6 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1s-.4 1-1 1z"
      fill={fill}
    />
  </svg>
);

IconTextBox.defaultProps = {
  ...iconDefaultProps,
};

export default IconTextBox;
