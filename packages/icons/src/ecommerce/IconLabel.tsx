import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconLabel: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.11 10.31A3 3 0 0021 7.9l-.18-2a3 3 0 00-2.74-2.74L16.1 3a3 3 0 00-2.41.88l-7.4 7.39 6.43 6.43 7.39-7.39zM17.2 5.38a1 1 0 111.41 1.419A1 1 0 0117.2 5.38zM7.73 20.56a1.51 1.51 0 002.14 0l1.43-1.44-6.42-6.43-1.44 1.44a1.51 1.51 0 000 2.14l4.29 4.29z"
      fill={fill}
    />
  </svg>
);

IconLabel.defaultProps = {
  ...iconDefaultProps,
};

export default IconLabel;
