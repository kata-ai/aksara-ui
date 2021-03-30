import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPanelCode: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6 21h12a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3zm13-3a1 1 0 01-1 1H6a1 1 0 01-1-1V8h14v10zM11.27 5.18a.73.73 0 11-1.46 0 .73.73 0 011.46 0zm-2.18 0a.73.73 0 11-1.46 0 .73.73 0 011.46 0zm-2.18 0a.73.73 0 11-1.46 0 .73.73 0 011.46 0z"
      fill={fill}
    />
    <path
      d="M8.29 16.71a1 1 0 001.639-.325 1 1 0 00-.219-1.095L8.41 14l1.3-1.29a1.004 1.004 0 10-1.42-1.42l-2 2a1 1 0 000 1.42l2 2zM15.59 14l-1.3 1.29a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l2-2a1.002 1.002 0 000-1.42l-2-2a1.004 1.004 0 10-1.42 1.42l1.3 1.29zM11 18a1 1 0 001.21-.73l1.75-7A1.013 1.013 0 1012 9.76l-1.75 7A1 1 0 0011 18z"
      fill={fill}
    />
  </svg>
);

IconPanelCode.defaultProps = {
  ...iconDefaultProps,
};

export default IconPanelCode;
