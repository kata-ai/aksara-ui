import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconPlug: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 8H5a1 1 0 00-1 1v1a1 1 0 001 1v-1h14v1a1 1 0 001-1V9a1 1 0 00-1-1zM9 3a1 1 0 00-2 0v3h2V3zM17 3a1 1 0 00-2 0v3h2V3z"
      fill={fill}
    />
    <path
      d="M5 10v3.17a3 3 0 001.64 2.65l.2.1c1 .5 2.2 1.79 2.16 2.9a.17.17 0 00.17.18H10v2a1 1 0 001 1h2a1 1 0 001-1v-2h.83a.172.172 0 00.124-.053.17.17 0 00.046-.127c0-1.11 1.16-2.4 2.16-2.9l.2-.1A3 3 0 0019 13.17V10H5z"
      fill={fill}
    />
    <path d="M9.5 19a.5.5 0 100-1 .5.5 0 000 1zM13.5 19a.5.5 0 100-1 .5.5 0 000 1z" fill={fill} />
  </svg>
);

IconPlug.defaultProps = {
  ...iconDefaultProps,
};

export default IconPlug;
