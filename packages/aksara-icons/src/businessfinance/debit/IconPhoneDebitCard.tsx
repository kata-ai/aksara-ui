import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPhoneDebitCard: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 7.09h-3.54V5a3 3 0 00-3-3H6a3 3 0 00-3 3v14a3 3 0 003 3h7.46a3 3 0 003-3v-2.91H20a1 1 0 001-1V10H7.91v5.09a1 1 0 001 1h5.55V19a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h7.46a1 1 0 011 1v2.09H8.91a1 1 0 00-1 1V9H21v-.91a1 1 0 00-1-1z"
      fill={fill}
    />
    <path d="M9.73 19a.82.82 0 100-1.64.82.82 0 000 1.64z" fill={fill} />
  </svg>
);

IconPhoneDebitCard.defaultProps = {
  ...iconDefaultProps,
};

export default IconPhoneDebitCard;
