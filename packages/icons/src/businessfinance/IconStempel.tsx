import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconStempel: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.749 12.013h-4.357l.854-5.175A3.295 3.295 0 0013.38 3.33a3.28 3.28 0 00-3.876.853 3.292 3.292 0 00-.744 2.655l.863 5.175H5.249a2.248 2.248 0 00-2.25 2.254v2.253a1.504 1.504 0 001.5 1.503v.751a2.255 2.255 0 002.25 2.254h10.5a2.248 2.248 0 002.25-2.254v-.751a1.5 1.5 0 001.5-1.503v-2.253a2.255 2.255 0 00-2.25-2.254zm-.75 6.761a.752.752 0 01-.75.751h-10.5a.75.75 0 01-.75-.751v-.751h12v.751z"
      fill={fill}
    />
  </svg>
);

IconStempel.defaultProps = {
  ...iconDefaultProps,
};

export default IconStempel;
