import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserFeedback: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12.75 12.75A.75.75 0 0012 12H6.75A3.75 3.75 0 003 15.75v4.5a.75.75 0 101.5 0v-4.5a2.25 2.25 0 012.25-2.25H12a.75.75 0 00.75-.75zM10.125 10.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM12 15.75h8.25a.75.75 0 00.69-.465.75.75 0 00-.158-.818l-1.5-1.5a.753.753 0 00-1.064 1.066l.224.217H12a.75.75 0 100 1.5zM20.25 16.5H12a.75.75 0 00-.69.465.75.75 0 00.157.817l1.5 1.5a.75.75 0 001.23-.244.75.75 0 00-.164-.82L13.806 18h6.443a.75.75 0 100-1.5z"
      fill={fill}
    />
  </svg>
);

IconUserFeedback.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserFeedback;
