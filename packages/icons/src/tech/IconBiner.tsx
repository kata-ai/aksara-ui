import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBiner: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M9 15H7v2h2v-2zM17 7h-2v2h2V7z" fill={fill} />
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-8 15a1 1 0 01-1 1H6a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4zm-1-7H6a1 1 0 010-2h1V7a1 1 0 010-2h1a1 1 0 011 1v3h1a1 1 0 110 2zm8 8h-4a1 1 0 010-2h1v-2a1 1 0 010-2h1a1 1 0 011 1v3h1a1 1 0 010 2zm1-9a1 1 0 01-1 1h-4a1 1 0 01-1-1V6a1 1 0 011-1h4a1 1 0 011 1v4z"
      fill={fill}
    />
  </svg>
);

IconBiner.defaultProps = {
  ...iconDefaultProps,
};

export default IconBiner;
