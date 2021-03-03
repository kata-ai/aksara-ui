import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSingle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 12c0-4.95 4.05-9 9-9s9 4.05 9 9-4.05 9-9 9-9-4.05-9-9zm1.8 0c0 3.96 3.24 7.2 7.2 7.2s7.2-3.24 7.2-7.2-3.24-7.2-7.2-7.2S4.8 8.04 4.8 12zm11.61 0a4.41 4.41 0 11-8.82 0 4.41 4.41 0 018.82 0z"
      fill={fill}
    />
  </svg>
);

IconSingle.defaultProps = {
  ...iconDefaultProps,
};

export default IconSingle;
