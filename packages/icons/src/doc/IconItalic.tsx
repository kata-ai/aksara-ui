import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconItalic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 2h-7a1 1 0 100 2h2.11l.44-1.32a1.003 1.003 0 011.9.64l-.23.68H19a1 1 0 100-2zM9.5 22H13a1 1 0 000-2h-2.11l-.44 1.32a1 1 0 01-.95.68zM8.55 20.68l.23-.68H6a1 1 0 000 2h3.5a1.25 1.25 0 01-.32 0 1 1 0 01-.63-1.32z"
      fill={fill}
    />
    <path
      d="M15.82 2.05a1 1 0 00-1.27.63L14.11 4 8.78 20l-.23.68A1 1 0 009.18 22c.106.014.214.014.32 0a1 1 0 00.95-.68l.44-1.32 5.33-16 .23-.68a.999.999 0 00-.63-1.27z"
      fill={fill}
    />
  </svg>
);

IconItalic.defaultProps = {
  ...iconDefaultProps,
};

export default IconItalic;
