import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconDebitCard: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H4a2 2 0 00-2 2v1h20V7a2 2 0 00-2-2zM2 17a2 2 0 002 2h16a2 2 0 002-2v-7H2v7zm3-2h4a1 1 0 010 2H5a1 1 0 010-2z"
      fill={fill}
    />
  </svg>
);

IconDebitCard.defaultProps = {
  ...iconDefaultProps,
};

export default IconDebitCard;
