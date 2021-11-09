import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPageClose: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M14.8 7.714c-.371 0-.727-.15-.99-.418a1.443 1.443 0 01-.41-1.01V2h-7c-.371 0-.727.15-.99.418S5 3.05 5 3.428v17.143c0 .38.147.743.41 1.01.263.268.619.419.99.419h11.2c.371 0 .727-.15.99-.418.262-.268.41-.632.41-1.01V7.713h-4.2zm-.322 7.229a.715.715 0 01.207.507.726.726 0 01-.207.507.7.7 0 01-.994 0L12 14.436l-1.484 1.521a.7.7 0 01-1.147-.232.727.727 0 01.153-.782l1.491-1.514-1.491-1.515a.725.725 0 010-1.014.696.696 0 01.994 0L12 12.421l1.484-1.521a.703.703 0 01.497-.21.692.692 0 01.497.21.72.72 0 01.206.507.73.73 0 01-.206.507l-1.491 1.515 1.491 1.514z"
      fill={fill}
    />
    <path d="M18.587 6.286L14.8 2.42v3.865h3.787z" fill={fill} />
  </svg>
);

IconPageClose.defaultProps = {
  ...iconDefaultProps,
};

export default IconPageClose;
