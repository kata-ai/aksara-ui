import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCodeTick: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8.996 19h-1a1 1 0 01-.999-1v-4a1 1 0 00-.29-.71L5.409 12l1.3-1.29a1 1 0 00.29-.71V6a1 1 0 01.999-1 1 1 0 000-2 2.997 2.997 0 00-2.998 3v3.59l-1.71 1.7a1.001 1.001 0 000 1.42L5 14.41V18a3.001 3.001 0 002.998 3h1a1 1 0 000-2zM18.99 9.59V6a3.001 3.001 0 00-2.998-3 .999.999 0 000 2 .999.999 0 01.999 1v4a.998.998 0 00.29.71L18.58 12l-1.3 1.29a1 1 0 00-.289.71v4a1 1 0 01-1 1h-.999a1 1 0 000 2h1a2.997 2.997 0 002.998-3v-3.59l1.709-1.7a1 1 0 000-1.42l-1.71-1.7z"
      fill={fill}
    />
    <path
      d="M15.112 9.52a.999.999 0 00-1.409 0l-2.828 2.83-.59-.59a.999.999 0 00-1.628 1.095c.051.121.126.232.22.325l1.288 1.3a1 1 0 001.42 0l3.527-3.54a1 1 0 000-1.42z"
      fill={fill}
    />
  </svg>
);

IconCodeTick.defaultProps = {
  ...iconDefaultProps,
};

export default IconCodeTick;
