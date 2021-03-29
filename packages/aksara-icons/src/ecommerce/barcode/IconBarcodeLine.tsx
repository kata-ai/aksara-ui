import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBarcodeLine: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 18V6a1 1 0 00-2 0v12a1 1 0 102 0zM7 15V6a1 1 0 00-2 0v9a1 1 0 102 0zM9 13a1 1 0 001-1V6a1 1 0 00-2 0v6a1 1 0 001 1zM13 17V6a1 1 0 00-2 0v11a1 1 0 002 0zM16 15.5V6a1 1 0 00-2 0v9.5a1 1 0 002 0zM19 18V6a1 1 0 00-2 0v12a1 1 0 002 0zM21 5a1 1 0 00-1 1v10a1 1 0 002 0V6a1 1 0 00-1-1z"
      fill={fill}
    />
  </svg>
);

IconBarcodeLine.defaultProps = {
  ...iconDefaultProps,
};

export default IconBarcodeLine;
