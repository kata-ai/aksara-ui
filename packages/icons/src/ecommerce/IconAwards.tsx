import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconAwards: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7 19.92a2.07 2.07 0 001 1.8 1.91 1.91 0 001.92.04L12 20.64l2.08 1.12a1.89 1.89 0 001.91 0 2.07 2.07 0 001-1.8v-6A7 7 0 105 9a6.93 6.93 0 002 4.89v6.03zM8.88 6.86L10 6.54a1 1 0 00.56-.41l.63-.92a1 1 0 011.7 0l.63.92a1 1 0 00.56.41l1.08.32a1 1 0 01.52 1.6l-.69.9a1 1 0 00-.21.65v1.12a1 1 0 01-1.37 1l-1.06-.38a1 1 0 00-.68 0l-1.06.38a1 1 0 01-1.37-1v-1.12a1 1 0 00-.21-.65l-.69-.9a1 1 0 01.54-1.6zM12 16a6.89 6.89 0 003-.69V20l-2.55-1.38a1 1 0 00-1 0L9 19.92v-4.6a7 7 0 003 .68z"
      fill={fill}
    />
  </svg>
);

IconAwards.defaultProps = {
  ...iconDefaultProps,
};

export default IconAwards;
