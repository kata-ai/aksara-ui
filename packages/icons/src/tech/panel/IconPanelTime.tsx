import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPanelTime: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5.002 17.992h3.986a1.002 1.002 0 011.001 1 .999.999 0 01-1 .999H5.001A2.006 2.006 0 013 17.992V5A2 2 0 015.002 3h13.013a2.006 2.006 0 012.001 1.999V9.33a.999.999 0 01-1 1 1.002 1.002 0 01-1.001-1V5v2.999H5.001v9.994z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.993 12.763a4.509 4.509 0 015.688.56 4.494 4.494 0 01-1.462 7.335 4.51 4.51 0 01-4.908-.975 4.496 4.496 0 01.682-6.92zM16.495 18h1.476a1.002 1.002 0 001.001-1 .999.999 0 00-1-.998h-.476v-1a.999.999 0 00-1-1 1.001 1.001 0 00-1.002 1v1.999a.999.999 0 001.001 1z"
      fill={fill}
    />
  </svg>
);

IconPanelTime.defaultProps = {
  ...iconDefaultProps,
};

export default IconPanelTime;
