import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCollection: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17 2H7a2 2 0 00-2 2v17a1 1 0 001.4.92l5.11-2.22a1 1 0 01.78 0l5.32 2.25A1 1 0 0019 21V4a2 2 0 00-2-2z"
      fill={fill}
    />
  </svg>
);

IconCollection.defaultProps = {
  ...iconDefaultProps,
};

export default IconCollection;
