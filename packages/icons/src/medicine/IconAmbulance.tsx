import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconAmbulance: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.51 7.31a2.29 2.29 0 00-1.82-.88H15V6a1 1 0 00-1-1H3a1 1 0 00-1 1v10a1 1 0 001 1h.55a2.5 2.5 0 004.9 0h6.1a2.5 2.5 0 004.9 0H21a1 1 0 001-1v-4.77c0-.53-.18-1.045-.51-1.46l-1.98-2.46zM16 8.43h1.69a.36.36 0 01.26.12l2 2.47a.38.38 0 01.07.21v1.2H16v-4zm-9.71.93h1.14V8.21h2v1.15h1.14v2H9.43v1.14h-2v-1.14H6.29v-2zM6 17a.5.5 0 010-1 .51.51 0 01.5.5.5.5 0 01-.5.5zm11 0a.5.5 0 010-1 .51.51 0 01.5.5.5.5 0 01-.5.5z"
      fill={fill}
    />
  </svg>
);

IconAmbulance.defaultProps = {
  ...iconDefaultProps,
};

export default IconAmbulance;
