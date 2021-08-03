import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDownload: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.627 16.906a1 1 0 01-.337-.246l-4.96-4.95a1 1 0 011.41-1.41L11 13.58V4a1 1 0 112 0v9.58l3.37-3.29a1 1 0 111.41 1.42l-5 4.95a1 1 0 01-1.153.246zm7.666-2.613A1 1 0 0121 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a1 1 0 112 0v4h14v-4a1 1 0 01.293-.707z"
      fill={fill}
    />
  </svg>
);

IconDownload.defaultProps = {
  ...iconDefaultProps,
};

export default IconDownload;
