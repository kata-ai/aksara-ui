import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconFolderOpen: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 19a1 1 0 01-1-1V6a1 1 0 011-1h3.17a1 1 0 01.71.29l.83.83a3 3 0 002.12.88H17a1 1 0 011 1v1h2V8a3 3 0 00-3-3h-5.17a1 1 0 01-.71-.29l-.83-.83A3 3 0 008.17 3H5a3 3 0 00-3 3v12a3 3 0 002.94 3l.33-2H5z"
      fill={fill}
    />
    <path d="M20 9H8.63a2 2 0 00-2 1.67L5.27 19l-.33 2h13.73a2 2 0 002-1.67l1.33-8A2 2 0 0020 9z" fill={fill} />
  </svg>
);

IconFolderOpen.defaultProps = {
  ...iconDefaultProps,
};

export default IconFolderOpen;
