import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconMenu: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 7a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4zm-5-2a2 2 0 11-4 0 2 2 0 014 0zm5 9a2 2 0 100-4 2 2 0 000 4zM7 12a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4zm9 5a2 2 0 11-4 0 2 2 0 014 0zM5 21a2 2 0 100-4 2 2 0 000 4zm9-2a2 2 0 11-4 0 2 2 0 014 0z"
      fill={fill}
    />
  </svg>
);

IconMenu.defaultProps = {
  ...iconDefaultProps,
};

export default IconMenu;
