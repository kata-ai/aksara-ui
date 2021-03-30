import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPrintCard: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4.5 9.75H6V19a2 2 0 002 2h8a2 2 0 002-2V9.75h1.5a1.5 1.5 0 001.5-1.5V4.5A1.5 1.5 0 0019.5 3h-15A1.5 1.5 0 003 4.5v3.75a1.5 1.5 0 001.5 1.5zM8 8h1v11H8V8zm8 11h-5V8h5v11z"
      fill={fill}
    />
    <path d="M14 18.25a1 1 0 001-1v-3a1 1 0 00-2 0v3a1 1 0 001 1z" fill={fill} />
  </svg>
);

IconPrintCard.defaultProps = {
  ...iconDefaultProps,
};

export default IconPrintCard;
