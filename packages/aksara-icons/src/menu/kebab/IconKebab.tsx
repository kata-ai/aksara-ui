import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconKebab: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.01 2h-.02A2.49 2.49 0 009.5 4.49v.02A2.49 2.49 0 0011.99 7h.02a2.49 2.49 0 002.49-2.49v-.02A2.49 2.49 0 0012.01 2zm0 7.5h-.02a2.49 2.49 0 00-2.49 2.49v.02a2.49 2.49 0 002.49 2.49h.02a2.49 2.49 0 002.49-2.49v-.02a2.49 2.49 0 00-2.49-2.49zm-.02 7.5h.02a2.49 2.49 0 012.49 2.49v.02A2.49 2.49 0 0112.01 22h-.02a2.49 2.49 0 01-2.49-2.49v-.02A2.49 2.49 0 0111.99 17z"
      fill={fill}
    />
  </svg>
);

IconKebab.defaultProps = {
  ...iconDefaultProps,
};

export default IconKebab;
