import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserLock: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12.75 12.75A.75.75 0 0012 12H6.75A3.75 3.75 0 003 15.75v4.5a.75.75 0 101.5 0v-4.5a2.25 2.25 0 012.25-2.25H12a.75.75 0 00.75-.75zM10.125 10.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM20.25 15h-.75v-.938a2.812 2.812 0 10-5.625 0V15h-.75a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75h7.125a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75zm-4.875-.938a1.313 1.313 0 012.625 0V15h-2.625v-.938z"
      fill={fill}
    />
  </svg>
);

IconUserLock.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserLock;
