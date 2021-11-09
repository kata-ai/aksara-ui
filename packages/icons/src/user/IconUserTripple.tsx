import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserTripple: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M13.5 15.75h-3a3.75 3.75 0 00-3.75 3.75.75.75 0 101.5 0 2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25.75.75 0 101.5 0 3.75 3.75 0 00-3.75-3.75zM12 14.25a3 3 0 100-6 3 3 0 000 6zM19.275 11.25H16.95a.75.75 0 100 1.5h2.325a2.326 2.326 0 012.25 1.695.75.75 0 00.75.555c.075.01.15.01.225 0a.75.75 0 00.532-.922 3.825 3.825 0 00-3.757-2.828zM17.723 9.75a3.038 3.038 0 003.075-3 3.075 3.075 0 00-6.143 0 3.037 3.037 0 003.068 3zM5.34 12.75h2.325a.75.75 0 100-1.5H5.34a3.825 3.825 0 00-3.75 2.805.75.75 0 00.563.945.87.87 0 00.195 0 .75.75 0 00.75-.555A2.332 2.332 0 015.34 12.75zM6.893 9.75c1.698 0 3.074-1.343 3.074-3s-1.376-3-3.075-3c-1.698 0-3.075 1.343-3.075 3s1.377 3 3.075 3z"
      fill={fill}
    />
  </svg>
);

IconUserTripple.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserTripple;
