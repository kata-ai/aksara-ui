import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPanelPerformance: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-6.73 2.18a.73.73 0 11-1.46 0 .73.73 0 011.46 0zm-2.18 0a.73.73 0 11-1.46 0 .73.73 0 011.46 0zm-2.18 0a.73.73 0 11-1.46 0 .73.73 0 011.46 0zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V8h14v10z"
      fill={fill}
    />
    <path
      d="M7 17a1 1 0 00.71-.29l2.29-2.3 1.29 1.3a1 1 0 001.34.06l4.9-4a1 1 0 00-1.26-1.54l-4.2 3.42-1.36-1.36a1.002 1.002 0 00-1.42 0l-3 3A1 1 0 007 17z"
      fill={fill}
    />
  </svg>
);

IconPanelPerformance.defaultProps = {
  ...iconDefaultProps,
};

export default IconPanelPerformance;
