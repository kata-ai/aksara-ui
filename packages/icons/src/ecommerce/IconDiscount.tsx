import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDiscount: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 19h18a1 1 0 001-1v-2.37a1 1 0 00-.76-.93 2.79 2.79 0 010-5.4 1 1 0 00.76-.93V6a1 1 0 00-1-1H3a1 1 0 00-1 1v2.37a1 1 0 00.76.93 2.79 2.79 0 010 5.4 1 1 0 00-.76.93V18a1 1 0 001 1zm11.5-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.06-8.56a1 1 0 010 1.41l-5.71 5.71a1 1 0 01-.71.3 1 1 0 01-.7-.3 1 1 0 010-1.41l5.71-5.71a1 1 0 011.41 0zM9.5 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
      fill={fill}
    />
  </svg>
);

IconDiscount.defaultProps = {
  ...iconDefaultProps,
};

export default IconDiscount;
