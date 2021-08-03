import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCoinIDR: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M16.25 12.62a1.12 1.12 0 00-1.12-1.12H14v2.25h1.13a1.13 1.13 0 001.12-1.13z" fill={fill} />
    <path
      d="M12 22a10 10 0 100-20 10 10 0 000 20zm.5-11.25a.76.76 0 01.75-.75h1.88a2.63 2.63 0 010 5.25H14v.5a.75.75 0 11-1.5 0v-5zm-6.25-2.5A.76.76 0 017 7.5h1.88a2.63 2.63 0 012.62 2.62 2.66 2.66 0 01-1.63 2.44L11.28 14a.75.75 0 01-1.06 1l-2.47-2.44v1.94a.75.75 0 11-1.5 0V8.25z"
      fill={fill}
    />
    <path d="M8.88 11.25a1.13 1.13 0 000-2.25H7.75v2.44a.76.76 0 01.5-.19h.63z" fill={fill} />
  </svg>
);

IconCoinIDR.defaultProps = {
  ...iconDefaultProps,
};

export default IconCoinIDR;
