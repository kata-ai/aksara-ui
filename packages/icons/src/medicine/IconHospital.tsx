import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconHospital: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 7h-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2H5a2 2 0 00-2 2v11a1 1 0 001 1h16a1 1 0 001-1V9a2 2 0 00-2-2zM5 19V9h2v10H5zm9-1.33h-4v-2h4v2zm0-4h-4v-2h4v2zm0-5.34h-1v1h-2v-1h-1v-2h1v-1h2v1h1v2zM19 19h-2V9h2v10z"
      fill={fill}
    />
  </svg>
);

IconHospital.defaultProps = {
  ...iconDefaultProps,
};

export default IconHospital;
