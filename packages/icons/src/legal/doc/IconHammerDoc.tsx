import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconHammerDoc: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11 6a.5.5 0 00-.5.5v4.8a.5.5 0 001 0V6.5A.5.5 0 0011 6zM3.5 6.5a.5.5 0 10-1 0v4.8a.5.5 0 001 0V6.5zM7.91 16.16a14.22 14.22 0 01-.11-1.73V11.3h1.7V6.5h-5v4.8h1.7v3.15a13.999 13.999 0 01-.11 1.7L6 17.3a1.06 1.06 0 102.11 0l-.2-1.14z"
      fill={fill}
    />
    <path
      d="M18 2H9a3 3 0 00-3 3h2a1 1 0 011-1h9a1 1 0 011 1v14a1 1 0 01-1 1H9a1 1 0 000 2h9a3 3 0 003-3V5a3 3 0 00-3-3z"
      fill={fill}
    />
    <path
      d="M11 17a1 1 0 001 1h4a1 1 0 000-2h-4a1 1 0 00-1 1zM14 14h2a1 1 0 000-2h-2a1 1 0 000 2zM14 10h2a1 1 0 100-2h-2a1 1 0 100 2z"
      fill={fill}
    />
  </svg>
);

IconHammerDoc.defaultProps = {
  ...iconDefaultProps,
};

export default IconHammerDoc;
