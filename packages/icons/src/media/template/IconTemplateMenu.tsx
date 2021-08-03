import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTemplateMenu: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H19C20.1 3 21 3.9 21 5V14.5H19H12H5H3V5C3 3.9 3.9 3 5 3ZM3 16.5V19C3 20.1 3.9 21 5 21H11V19V16.5H5H3ZM13 16.5V19V21H19C20.1 21 21 20.1 21 19V16.5H19H13Z"
      fill={fill}
    />
  </svg>
);

IconTemplateMenu.defaultProps = {
  ...iconDefaultProps,
};

export default IconTemplateMenu;
