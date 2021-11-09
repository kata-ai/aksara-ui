import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSmile: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 17.983h1v2.268a.749.749 0 001.26.55l3.08-2.818H19a2.001 2.001 0 002-1.998V4.998A1.997 1.997 0 0019 3H5a2.001 2.001 0 00-2 1.998v10.987a1.997 1.997 0 002 1.998zM15 6.996a1.001 1.001 0 01.98 1.193.998.998 0 01-1.363.728 1 1 0 01-.324-1.629A1 1 0 0115 6.996zm-6 0a1 1 0 01.98 1.193.999.999 0 01-1.811.36A.998.998 0 019 6.996zM6.57 12.09a.489.489 0 01.68-.18 9.828 9.828 0 004.83.999 10.29 10.29 0 004.61-.919.489.489 0 01.67.21.49.49 0 01-.21.669 11.01 11.01 0 01-5.07.999 10.66 10.66 0 01-5.33-1.139.49.49 0 01-.18-.64z"
      fill={fill}
    />
  </svg>
);

IconSmile.defaultProps = {
  ...iconDefaultProps,
};

export default IconSmile;
