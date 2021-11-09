import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCloudUpload2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.12 9.4v-.07A5.56 5.56 0 0012.36 4a5.69 5.69 0 00-5.58 4A4.13 4.13 0 003 12a4.17 4.17 0 004.32 4H11v-4.59l-1.29 1.3a1.004 1.004 0 11-1.42-1.42l3-3a1 1 0 011.42 0l3 3a1 1 0 010 1.42 1.002 1.002 0 01-1.42 0L13 11.41V16h4.4a3.47 3.47 0 003.6-3.33 3.41 3.41 0 00-2.88-3.27z"
      fill={fill}
    />
    <path d="M11 19a1 1 0 002 0v-3h-2v3z" fill={fill} />
  </svg>
);

IconCloudUpload2.defaultProps = {
  ...iconDefaultProps,
};

export default IconCloudUpload2;
