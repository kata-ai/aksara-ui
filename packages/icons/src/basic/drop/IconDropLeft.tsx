import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconDropLeft: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.382 20.92a1 1 0 00.62-.92V4a1 1 0 00-.62-.92.999.999 0 00-1.09.21l-7.995 8a.999.999 0 000 1.42l7.996 8a1 1 0 001.09.21z"
      fill={fill}
    />
  </svg>
);

IconDropLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconDropLeft;
