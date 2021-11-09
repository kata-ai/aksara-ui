import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCalculator: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM6 7.5a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75V9a.75.75 0 01-.75.75H6.75A.75.75 0 016 9V7.5zM8.25 18h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5zm0-2.25h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5zm0-2.25h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5zm4.5 4.5h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5zm0-2.25h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5zm0-2.25h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5zm4.5 4.5h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5zm0-2.25h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5zm0-2.25h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5z"
      fill={fill}
    />
  </svg>
);

IconCalculator.defaultProps = {
  ...iconDefaultProps,
};

export default IconCalculator;
