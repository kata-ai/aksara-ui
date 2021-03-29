import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBubble2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 20.052a.746.746 0 00.857.896l4.127-1.026a8.98 8.98 0 0011.3-2.759 8.95 8.95 0 00-.929-11.58A8.976 8.976 0 003.298 9.79a8.949 8.949 0 00.699 6.15L3 20.053zm12.957-9.089a.997.997 0 01.978 1.19.995.995 0 01-1.359.725.996.996 0 01.381-1.915zm-3.987 0a.997.997 0 01.978 1.19.995.995 0 01-1.359.725.996.996 0 01.381-1.915zm-3.986 0a.998.998 0 01.977 1.19.995.995 0 01-1.359.725.996.996 0 01.382-1.915z"
      fill={fill}
    />
  </svg>
);

IconBubble2.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubble2;
