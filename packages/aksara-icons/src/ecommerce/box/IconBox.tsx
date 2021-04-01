import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBox: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 19V5a2 2 0 00-2-2h-5v5.19a.5.5 0 01-.72.45l-1.06-.53a.49.49 0 00-.44 0l-1.06.53a.5.5 0 01-.72-.45V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z"
      fill={fill}
    />
  </svg>
);

IconBox.defaultProps = {
  ...iconDefaultProps,
};

export default IconBox;
