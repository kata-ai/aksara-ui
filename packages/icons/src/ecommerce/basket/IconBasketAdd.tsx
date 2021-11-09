import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBasketAdd: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 7.68a1.34 1.34 0 00-1.33-1.33h-2.59l-1.41-2.8a1.002 1.002 0 00-1.79.9l1 1.9H9.16l1-1.9a1.002 1.002 0 00-1.79-.9l-1.45 2.8H4.33a1.33 1.33 0 100 2.65h13.34A1.33 1.33 0 0019 7.68zM15 10a6 6 0 00-3.31 1H5l.54 6.37A1.77 1.77 0 007.31 19h2.5A6 6 0 1015 10zm0 10a4 4 0 110-8 4 4 0 010 8z"
      fill={fill}
    />
    <path d="M17 15h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2z" fill={fill} />
  </svg>
);

IconBasketAdd.defaultProps = {
  ...iconDefaultProps,
};

export default IconBasketAdd;
