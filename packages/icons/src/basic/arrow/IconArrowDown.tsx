import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconArrowDown: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12.03 22c.3 0 .56-.14.739-.34l5.931-5.92c.4-.38.4-1.02 0-1.42a.988.988 0 00-1.418 0l-4.254 4.24V3c0-.56-.439-1-.998-1a.99.99 0 00-.999 1v15.58l-4.313-4.3c-.4-.38-1.019-.38-1.418 0-.2.2-.3.46-.3.7 0 .26.1.52.3.7l5.971 5.96c.2.22.46.36.759.36z"
      fill={fill}
    />
  </svg>
);

IconArrowDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowDown;
