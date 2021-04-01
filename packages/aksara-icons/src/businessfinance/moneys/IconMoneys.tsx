import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMoneys: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 9H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2zm0 10v-2.28A2.48 2.48 0 0017 19H7a2.48 2.48 0 00-2-2.28v-3.44A2.48 2.48 0 007 11h12v8z"
      fill={fill}
    />
    <path
      d="M12 17a2 2 0 100-4 2 2 0 000 4zM19 13.28V11h-2a2.48 2.48 0 002 2.28zM4 7a1 1 0 001 1h14a1 1 0 100-2H5a1 1 0 00-1 1zM17 5a1 1 0 100-2H7a1 1 0 000 2h10z"
      fill={fill}
    />
  </svg>
);

IconMoneys.defaultProps = {
  ...iconDefaultProps,
};

export default IconMoneys;
