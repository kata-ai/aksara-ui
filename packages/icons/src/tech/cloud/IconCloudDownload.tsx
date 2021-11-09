import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCloudDownload: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.12 8.397v-.07A5.555 5.555 0 0012.36 3a5.692 5.692 0 00-5.58 3.998A4.13 4.13 0 003 10.996a4.167 4.167 0 004.32 3.998H11V9.996a1 1 0 012 0v4.998h4.4a3.471 3.471 0 003.6-3.329 3.407 3.407 0 00-2.88-3.268z"
      fill={fill}
    />
    <path
      d="M11 17.582l-1.29-1.3a1.003 1.003 0 00-1.42 1.42l3 2.999a1.002 1.002 0 001.42 0l3-2.999a1.003 1.003 0 10-1.42-1.42l-1.29 1.3v-2.588h-2v2.588z"
      fill={fill}
    />
  </svg>
);

IconCloudDownload.defaultProps = {
  ...iconDefaultProps,
};

export default IconCloudDownload;
