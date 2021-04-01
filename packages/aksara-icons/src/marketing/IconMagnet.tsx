import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconMagnet: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 2h-2a1 1 0 00-1 1v4h4V3a1 1 0 00-1-1zM18 12a6 6 0 11-12 0V9H2v3a10 10 0 0020 0V9h-4v3zM6 3a1 1 0 00-1-1H3a1 1 0 00-1 1v4h4V3z"
      fill={fill}
    />
    <path
      d="M12.12 2.18L8.68 6.3a.5.5 0 00.39.82H11v3.62a.5.5 0 00.88.32l3.44-4.12a.5.5 0 00-.39-.82H13V2.5a.5.5 0 00-.88-.32z"
      fill={fill}
    />
  </svg>
);

IconMagnet.defaultProps = {
  ...iconDefaultProps,
};

export default IconMagnet;
