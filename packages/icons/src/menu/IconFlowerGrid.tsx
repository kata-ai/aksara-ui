import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconFlowerGrid: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3a4 4 0 100 8h4V7a4 4 0 00-4-4zm10 0a4 4 0 00-4 4v4h4a4 4 0 000-8zM3 17a4 4 0 014-4h4v4a4 4 0 01-8 0zm14-4h-4v4a4 4 0 104-4z"
      fill={fill}
    />
  </svg>
);

IconFlowerGrid.defaultProps = {
  ...iconDefaultProps,
};

export default IconFlowerGrid;
