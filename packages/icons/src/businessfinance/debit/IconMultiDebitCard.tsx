import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMultiDebitCard: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 8.65h-2v-1H3v4.91a1.48 1.48 0 001.48 1.48H5.7V19a2 2 0 002 2H19a2 2 0 002-2v-8.35a2 2 0 00-2-2zm0 2V12H7.7v-1.35H19zM19 19H7.7v-5H19v5z"
      fill={fill}
    />
    <path
      d="M9.65 18h3a1 1 0 000-2h-3a1 1 0 000 2zM17 5.7V4.48A1.47 1.47 0 0015.57 3H4.48A1.48 1.48 0 003 4.48V5.7h14z"
      fill={fill}
    />
  </svg>
);

IconMultiDebitCard.defaultProps = {
  ...iconDefaultProps,
};

export default IconMultiDebitCard;
