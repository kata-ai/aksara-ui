import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconPen: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.1 3.6l2.3 2.3c.8.8.8 2.1 0 2.9l-.9.9-1.8-1.8-3.4-3.4.9-.9c.8-.8 2.1-.8 2.9 0zM3 16.2c0-.3.1-.5.3-.7L12.8 6l5.2 5.2-9.5 9.5c-.2.2-.4.3-.7.3H4c-.6 0-1-.4-1-1v-3.8z"
      fill={fill}
    />
  </svg>
);

IconPen.defaultProps = {
  ...iconDefaultProps,
};

export default IconPen;
