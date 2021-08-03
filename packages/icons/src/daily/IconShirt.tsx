import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconShirt: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.45 5.66L16 3.41a4.11 4.11 0 01-8.18.07L3.55 5.66A1 1 0 003 6.73l.6 3.44a1 1 0 001 .83h1a.2.2 0 01.2.2V19a2 2 0 002 2h8.46a2 2 0 002-2v-7.8a.2.2 0 01.2-.2h1a1 1 0 001-.83L21 6.73a1 1 0 00-.55-1.07z"
      fill={fill}
    />
    <path d="M11.92 5.13A2.13 2.13 0 0014.05 3H9.79a2.13 2.13 0 002.13 2.13z" fill={fill} />
  </svg>
);

IconShirt.defaultProps = {
  ...iconDefaultProps,
};

export default IconShirt;
