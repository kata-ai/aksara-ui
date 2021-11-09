import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconWifi: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 21.007h16a1 1 0 001-1v-3.001a1 1 0 00-1-1h-7v-4.002a1 1 0 10-2 0v4.001H4a1 1 0 00-1 1v3.002a1 1 0 001 1zm2-3h3a.5.5 0 010 1H6a.5.5 0 010-1z"
      fill={fill}
    />
    <path
      d="M12 7.002a4.998 4.998 0 00-4.33 2.5A1 1 0 008 10.864a.93.93 0 00.5.14 1 1 0 00.87-.5 3 3 0 015.2 0 1 1 0 001.73-1A5 5 0 0012 7.002z"
      fill={fill}
    />
    <path
      d="M4.57 8.862a1 1 0 001.37-.36 7.001 7.001 0 019.558-2.56 7.002 7.002 0 012.562 2.56 1 1 0 00.87.5.93.93 0 00.5-.14 1 1 0 00.36-1.36A9.002 9.002 0 0012 3.007a8.997 8.997 0 00-7.79 4.495 1 1 0 00.36 1.36z"
      fill={fill}
    />
  </svg>
);

IconWifi.defaultProps = {
  ...iconDefaultProps,
};

export default IconWifi;
