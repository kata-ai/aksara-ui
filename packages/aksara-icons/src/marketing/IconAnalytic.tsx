import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconAnalytic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M19.992 19H4.999V4A1 1 0 103 4v16a1 1 0 001 1h15.992a1 1 0 000-2z" fill={fill} />
    <path
      d="M20.991 3.74a.884.884 0 000-.14s-.05-.05-.06-.09a1.237 1.237 0 00-.17-.23l-.11-.06a1.28 1.28 0 00-.21-.14h-.22a.799.799 0 00-.229-.08h-4.998a1 1 0 000 2h2.68l-3.86 4.09-3.307-1.95a1 1 0 00-1.51.58l-2.479 8.51a1 1 0 00.68 1.25c.093.01.187.01.28 0a.999.999 0 001-.72l2.118-7.25 2.89 1.71a.999.999 0 001.239-.22l4.268-4.49V9a1 1 0 101.998 0V4a1.001 1.001 0 000-.26z"
      fill={fill}
    />
  </svg>
);

IconAnalytic.defaultProps = {
  ...iconDefaultProps,
};

export default IconAnalytic;
