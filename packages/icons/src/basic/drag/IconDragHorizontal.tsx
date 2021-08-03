import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconDragHorizontal: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 12.994H5.41l1.3 1.288a.999.999 0 010 1.418 1 1 0 01-1.42 0l-3-2.996a.999.999 0 01-.21-.33.938.938 0 010-.758.999.999 0 01.21-.33l3-2.996a1.005 1.005 0 011.714.709c0 .266-.106.52-.294.709l-1.3 1.288H9a1 1 0 011 1 .998.998 0 01-1 .998zm12.71-1.708a1 1 0 01.21.33c.051.12.078.248.08.38a.999.999 0 01-.08.379 1 1 0 01-.21.33l-3 2.995a1.001 1.001 0 01-1.42 0 1 1 0 010-1.418l1.3-1.288H15a1 1 0 01-1-.999.998.998 0 011-.999h3.59l-1.3-1.288a1.002 1.002 0 111.42-1.418l3 2.996z"
      fill={fill}
    />
  </svg>
);

IconDragHorizontal.defaultProps = {
  ...iconDefaultProps,
};

export default IconDragHorizontal;
