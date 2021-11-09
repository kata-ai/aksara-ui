import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUnderline: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 17a6 6 0 006-6V4a1 1 0 00-2 0v7a4 4 0 11-8 0V4a1 1 0 00-2 0v7a6 6 0 006 6zM20 19H4a1 1 0 000 2h16a1 1 0 000-2z"
      fill={fill}
    />
  </svg>
);

IconUnderline.defaultProps = {
  ...iconDefaultProps,
};

export default IconUnderline;
