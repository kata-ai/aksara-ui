import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconDropUp: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3.082 16.38a1 1 0 00.92.62h16a1.001 1.001 0 00.92-.62.999.999 0 00-.21-1.089l-8-7.995a.999.999 0 00-1.42 0l-8 7.995a.999.999 0 00-.21 1.09z"
      fill={fill}
    />
  </svg>
);

IconDropUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconDropUp;
