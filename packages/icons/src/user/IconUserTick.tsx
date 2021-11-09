import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserTick: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.25 12H9a6 6 0 00-6 6v.75A2.25 2.25 0 005.25 21H15a2.25 2.25 0 002.25-2.25V18a6 6 0 00-6-6zM10.125 10.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM18.683 5.468l-1.76 1.725-.606-.6a.781.781 0 00-1.091 0 .744.744 0 000 1.065l1.152 1.125a.77.77 0 00.546.221.785.785 0 00.545-.221l2.305-2.25a.744.744 0 000-1.065.781.781 0 00-1.09 0z"
      fill={fill}
    />
  </svg>
);

IconUserTick.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserTick;
