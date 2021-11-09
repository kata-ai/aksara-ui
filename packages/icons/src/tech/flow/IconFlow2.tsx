import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconFlow2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17.986 5H8.815a3 3 0 00-3.333-1.957A2.997 2.997 0 002.992 6a3.002 3.002 0 002.49 2.957A2.995 2.995 0 008.815 7h9.171a.999.999 0 01.999 1v2a1 1 0 01-.999 1h-2.997v-1a1 1 0 00-1-1H9.994a.999.999 0 00-.999 1v1H5.997A2.996 2.996 0 003 14v2a3.001 3.001 0 002.997 3h9.172a2.999 2.999 0 003.332 1.957A2.997 2.997 0 0020.991 18a3.002 3.002 0 00-2.49-2.957A2.994 2.994 0 0015.17 17H5.997a.998.998 0 01-.999-1v-2a1 1 0 011-1h2.996v1a1 1 0 001 1h3.996a.999.999 0 00.999-1v-1h2.997a2.996 2.996 0 002.997-3V8a3.001 3.001 0 00-2.997-3zM5.997 7a.998.998 0 01-.706-1.707A.999.999 0 115.997 7zm11.989 10a.999.999 0 110 1.998.999.999 0 010-1.998zm-4.995-4h-1.998v-2h1.998v2z"
      fill={fill}
    />
  </svg>
);

IconFlow2.defaultProps = {
  ...iconDefaultProps,
};

export default IconFlow2;
