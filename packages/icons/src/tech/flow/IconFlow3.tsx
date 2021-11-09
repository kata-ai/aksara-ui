import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconFlow3: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.02 3a3.008 3.008 0 00-1.922.713 2.996 2.996 0 00.92 5.102v1.229a2.994 2.994 0 01-.88 2.07 3.007 3.007 0 01-2.074.877H11.01a6.015 6.015 0 00-4.005 1.529V8.815a2.992 2.992 0 00.935-5.118 3.008 3.008 0 00-4.897 1.785 2.992 2.992 0 001.96 3.333v7.353a3.004 3.004 0 00-1.975 2.416 2.992 2.992 0 001.245 2.86 3.008 3.008 0 004.301-.898c.285-.47.435-1.01.434-1.56a2.992 2.992 0 00-1.202-2.378 4.003 4.003 0 013.204-1.619h3.054a5.012 5.012 0 003.49-1.463 4.99 4.99 0 001.467-3.482v-1.23a2.992 2.992 0 00.92-5.102A3.008 3.008 0 0018.019 3zM6.003 4.998a1.003 1.003 0 01.982 1.194.998.998 0 01-.787.785 1.003 1.003 0 01-1.196-.98.998.998 0 011-.999zm12.015 1.998a1.003 1.003 0 01-.925-.616.997.997 0 01.73-1.363 1.003 1.003 0 011.197.98.998.998 0 01-1.002 1z"
      fill={fill}
    />
  </svg>
);

IconFlow3.defaultProps = {
  ...iconDefaultProps,
};

export default IconFlow3;
