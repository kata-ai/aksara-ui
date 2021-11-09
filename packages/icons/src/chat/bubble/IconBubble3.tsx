import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBubble3: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 17.983h1v2.268a.749.749 0 001.26.55l3.08-2.818H19a2.001 2.001 0 002-1.998V4.998A1.997 1.997 0 0019 3H5a2.001 2.001 0 00-2 1.998v10.987a1.997 1.997 0 002 1.998zm11-8.99a1.001 1.001 0 01.98 1.194.998.998 0 01-1.363.728A1 1 0 0116 8.993zm-4 0a1.001 1.001 0 01.98 1.194.998.998 0 01-1.363.728A1 1 0 0112 8.993zm-4 0a1 1 0 01.98 1.194.999.999 0 01-1.811.36A.998.998 0 018 8.993z"
      fill={fill}
    />
  </svg>
);

IconBubble3.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubble3;
