import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUpload: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 13.974a1.002 1.002 0 00-1 .997v3.99H5v-3.99a.997.997 0 00-1-.997 1.002 1.002 0 00-1 .997v3.99c0 .53.21 1.038.586 1.412.375.374.884.584 1.414.584h14a1.993 1.993 0 002-1.995v-3.99a.997.997 0 00-1-.998z"
      fill={fill}
    />
    <path
      d="M7.74 9.694L11 6.422v9.547a.997.997 0 001 .998 1.001 1.001 0 001-.998V6.422l3.3 3.272c.186.184.438.288.7.29a1.002 1.002 0 00.71-.3.997.997 0 000-1.407l-5-4.988a1 1 0 00-1.49 0l-5 4.938a.998.998 0 000 1.417 1 1 0 001.52.05z"
      fill={fill}
    />
  </svg>
);

IconUpload.defaultProps = {
  ...iconDefaultProps,
};

export default IconUpload;
