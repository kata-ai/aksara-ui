import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconEarth: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18h-.19c.134-.461.198-.94.19-1.42 0-1.73-2.08-1.73-2.08-3.81s2.77-2.51 1.39-4.15c-.94-1.12-4.24-2-6.83-1.33A8.07 8.07 0 017 5.78a4 4 0 001.2.68c1.28.36 1.73-.69 2.08-1.73a1.29 1.29 0 00.05-.55A7.86 7.86 0 0112 4a8.24 8.24 0 012.35.35c-.25.74-.39 1.71.42 2.11 1.38.69 2.08.69 1.38 3.46-.46 1.86 1.45 3.92 3.46 4.53A8 8 0 0112 20z"
      fill={fill}
    />
  </svg>
);

IconEarth.defaultProps = {
  ...iconDefaultProps,
};

export default IconEarth;
