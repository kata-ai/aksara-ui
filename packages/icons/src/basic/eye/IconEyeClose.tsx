import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconEyeClose: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.956 5c4.27 0 8.044 2.5 9.832 6.1.298.6.298 1.2-.1 1.8-1.787 3.6-5.462 6.1-9.732 6.1s-7.945-2.5-9.733-6c-.297-.6-.297-1.3 0-1.9C4.011 7.5 7.686 5 11.956 5z"
      fill={fill}
    />
  </svg>
);

IconEyeClose.defaultProps = {
  ...iconDefaultProps,
};

export default IconEyeClose;
