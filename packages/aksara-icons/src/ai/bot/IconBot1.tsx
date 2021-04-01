import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBot1: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.1 9.38h-.45C18.55 6.85 15.55 5 12 5 8.45 5 5.45 6.85 4.35 9.42H3.9a.88.88 0 00-.9.87v2.63a.88.88 0 00.9.87h.43A8.4 8.4 0 0012 19a8.4 8.4 0 007.67-5.25h.43a.88.88 0 00.9-.87v-2.63a.881.881 0 00-.9-.87zM12 17.47a5.33 5.33 0 01-5.32-4.88c0-2.38 2.38-3 5.32-3 2.94 0 5.32.62 5.32 3A5.33 5.33 0 0112 17.47z"
      fill={fill}
    />
    <path d="M9 12a1 1 0 100 2 1 1 0 000-2zM15 14a1 1 0 100-2 1 1 0 000 2z" fill={fill} />
  </svg>
);

IconBot1.defaultProps = {
  ...iconDefaultProps,
};

export default IconBot1;
