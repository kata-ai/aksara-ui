import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconGift: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 11h7V7h2v4h7a1 1 0 001-1V8a1 1 0 00-1-1h-2.35c.07-.235.118-.476.14-.72A3 3 0 0017 3.85 3 3 0 0014.53 3a3.87 3.87 0 00-2.37 1.14c-.06.06-.1.13-.16.19a1.459 1.459 0 00-.16-.19A3.86 3.86 0 009.47 3 3 3 0 007 3.85a3 3 0 00-.83 2.43c.034.247.098.489.19.72H4a1 1 0 00-1 1v2a1 1 0 001 1zm9.57-5.42A1.89 1.89 0 0114.71 5a.94.94 0 011.09 1.1 1.88 1.88 0 01-.36.9H13v-.28a1.94 1.94 0 01.57-1.14zm-5.11-.32A1 1 0 019.17 5h.12a1.87 1.87 0 011.14.56A2 2 0 0111 6.71V7H8.56a1.88 1.88 0 01-.36-.9 1 1 0 01.26-.84zM11 13H5v6a2 2 0 002 2h4v-8zM19 19v-6h-6v8h4a2 2 0 002-2z"
      fill={fill}
    />
  </svg>
);

IconGift.defaultProps = {
  ...iconDefaultProps,
};

export default IconGift;
