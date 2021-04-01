import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBasket: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5.86 19.15a2 2 0 002 1.85h8.3a2 2 0 002-1.85L19 12H5l.86 7.15zM19.5 7h-2.88l-1.73-3.45a1 1 0 10-1.78.9L14.38 7H9.62l1.27-2.55a1 1 0 00-1.78-.9L7.38 7H4.5a1.5 1.5 0 100 3h15a1.5 1.5 0 100-3z"
      fill={fill}
    />
  </svg>
);

IconBasket.defaultProps = {
  ...iconDefaultProps,
};

export default IconBasket;
