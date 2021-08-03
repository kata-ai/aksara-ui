import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconDragVertical: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 5.41l-1.288 1.3a1.002 1.002 0 11-1.418-1.42l2.996-3a1.15 1.15 0 01.33-.21A.998.998 0 0112 2c.13.002.259.029.379.08a.929.929 0 01.33.21l2.996 3a1 1 0 010 1.42.999.999 0 01-1.419 0l-1.288-1.3V9a1 1 0 01-.999 1A.998.998 0 0111 9V5.41zm1.998 13.18l1.288-1.3a1.002 1.002 0 111.419 1.42l-2.997 3a.929.929 0 01-.33.21A.999.999 0 0112 22a.999.999 0 01-.38-.08 1.149 1.149 0 01-.329-.21l-2.996-3a1.003 1.003 0 011.418-1.42L11 18.59V15a1 1 0 011-1 .998.998 0 01.998 1v3.59z"
      fill={fill}
    />
  </svg>
);

IconDragVertical.defaultProps = {
  ...iconDefaultProps,
};

export default IconDragVertical;
