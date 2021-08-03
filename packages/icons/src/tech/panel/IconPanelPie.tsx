import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPanelPie: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9.491 18H5L4.998 8h12.98v1.368a1 1 0 002 0V5a2 2 0 00-2-2H4.998A2.001 2.001 0 003 5v13a2.001 2.001 0 001.998 2h4.493a1 1 0 000-2z"
      fill={fill}
    />
    <path d="M15.997 17V13.89a3.558 3.558 0 103.555 3.556h-3.11a.445.445 0 01-.445-.445z" fill={fill} />
    <path d="M17.444 15.667v-3.11A3.556 3.556 0 0121 16.111h-3.111a.444.444 0 01-.445-.445z" fill={fill} />
  </svg>
);

IconPanelPie.defaultProps = {
  ...iconDefaultProps,
};

export default IconPanelPie;
