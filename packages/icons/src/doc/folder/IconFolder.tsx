import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconFolder: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-6.827a1 1 0 01-.74-.327l-1.838-2.02A2 2 0 008.116 3H5zm1 14a1 1 0 000 2h4a1 1 0 000-2H6z"
      fill={fill}
    />
  </svg>
);

IconFolder.defaultProps = {
  ...iconDefaultProps,
};

export default IconFolder;
