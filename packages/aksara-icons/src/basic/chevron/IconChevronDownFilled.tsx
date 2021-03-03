import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconChevronDownFilled: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2.29 7.72l-4 4a1 1 0 01-1.41 0l-4-4a1.004 1.004 0 111.41-1.43l3.3 3.3 3.28-3.29a1.004 1.004 0 011.42 1.42z"
      fill={fill}
    />
  </svg>
);

IconChevronDownFilled.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronDownFilled;
