import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCoding: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5.999 3a2.998 2.998 0 00-2.12 5.121A2.999 2.999 0 105.998 3zm0 4a1 1 0 110-1.999A1 1 0 016 7zM5.999 16a2.998 2.998 0 00-2.941 3.585A3 3 0 105.999 16zm0 4a1 1 0 110-1.999 1 1 0 010 1.999zM3.29 14.71a1 1 0 001.42 0l.79-.8.789.8a1 1 0 001.638-.325 1 1 0 00-.219-1.095l-.8-.79.8-.79a1.004 1.004 0 00-1.42-1.42l-.789.8-.79-.8a1.004 1.004 0 10-1.42 1.42l.8.79-.8.79a1.001 1.001 0 000 1.42zM19.994 3h-7.997a1 1 0 000 2h7.997a1 1 0 000-2zM18.995 6h-6.998a1 1 0 000 2h6.998a1 1 0 000-2zM11.997 12h2a1 1 0 000-2h-2a1 1 0 000 2zM11.997 15h4.998a1 1 0 000-2h-4.998a1 1 0 000 2zM18.995 17h-6.998a1 1 0 000 2h6.998a1 1 0 000-2zM17.995 20h-5.998a1 1 0 000 2h5.998a1 1 0 000-2z"
      fill={fill}
    />
  </svg>
);

IconCoding.defaultProps = {
  ...iconDefaultProps,
};

export default IconCoding;
