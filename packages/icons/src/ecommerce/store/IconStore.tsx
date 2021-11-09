import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconStore: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.97 5a2.79 2.79 0 00-2.666-2H6.714a2.782 2.782 0 00-2.666 2L3.15 8.12a3.536 3.536 0 001.148 3.78 3.569 3.569 0 004.691-.31 3.893 3.893 0 004.649 1.039 3.893 3.893 0 001.34-1.039 3.58 3.58 0 002.526 1 3.447 3.447 0 002.817-1.408 3.464 3.464 0 00.507-3.112L19.969 5zM17.973 14a.997.997 0 00-.998 1v4H13.98v-2a2.002 2.002 0 00-1.996-2 1.995 1.995 0 00-1.997 2v2H6.993v-4a1 1 0 00-.998-1 .997.997 0 00-.999 1v4a2.002 2.002 0 001.997 2h9.982a1.995 1.995 0 001.996-2v-4a1 1 0 00-.998-1z"
      fill={fill}
    />
  </svg>
);

IconStore.defaultProps = {
  ...iconDefaultProps,
};

export default IconStore;
