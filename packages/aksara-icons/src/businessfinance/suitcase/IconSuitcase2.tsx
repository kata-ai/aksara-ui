import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconSuitcase2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15 12v1.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5V12H3v7.5A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5V12h-6z"
      fill={fill}
    />
    <path
      d="M13.5 12h-3v1.5h3V12zM19.5 6h-3.75V4.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5V6H4.5A1.5 1.5 0 003 7.5v3h18v-3A1.5 1.5 0 0019.5 6zm-5.25-1.5V6h-4.5V4.5h4.5z"
      fill={fill}
    />
  </svg>
);

IconSuitcase2.defaultProps = {
  ...iconDefaultProps,
};

export default IconSuitcase2;
