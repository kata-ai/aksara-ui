import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPlus: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.05 4a1 1 0 10-2 0v7H4a1 1 0 000 2h7.05v7a1 1 0 002 0v-7H20a1 1 0 000-2h-6.95V4z"
      fill={fill}
    />
  </svg>
);

IconPlus.defaultProps = {
  ...iconDefaultProps,
};

export default IconPlus;
