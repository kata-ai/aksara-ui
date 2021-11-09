import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPanelWarning: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 18h4a1 1 0 010 2H5a2.002 2.002 0 01-2-2V5a2.002 2.002 0 012-2h13a2.002 2.002 0 012 2v5a1 1 0 01-2 0V8H5v10z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.434 12.578l3.455 6.91A1.044 1.044 0 0119.954 21h-6.908a1.044 1.044 0 01-.934-1.511l3.454-6.911a1.044 1.044 0 011.868 0zm-1.212 7.437a.5.5 0 10.556-.83.5.5 0 00-.556.83zm.734-1.827l.455-2.277a.838.838 0 00-.91-.91.831.831 0 00-.912.91l.456 2.277a.456.456 0 00.911 0z"
      fill={fill}
    />
  </svg>
);

IconPanelWarning.defaultProps = {
  ...iconDefaultProps,
};

export default IconPanelWarning;
