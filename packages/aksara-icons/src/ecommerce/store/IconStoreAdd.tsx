import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconStoreAdd: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8 11.59a3.9 3.9 0 006 0 3.59 3.59 0 004.71.3 3.53 3.53 0 001.15-3.78L19 5a2.79 2.79 0 00-2.67-2H5.72a2.79 2.79 0 00-2.67 2l-.9 3.12A3.53 3.53 0 003.3 11.9c.22.16.454.297.7.41V19a2 2 0 002 2h6a1 1 0 001-1v-3a2 2 0 00-4 0v2H6v-6.41a3.6 3.6 0 002-1z"
      fill={fill}
    />
    <path d="M21 17h-2v-2a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2z" fill={fill} />
  </svg>
);

IconStoreAdd.defaultProps = {
  ...iconDefaultProps,
};

export default IconStoreAdd;
