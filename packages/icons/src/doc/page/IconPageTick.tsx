import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPageTick: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M14.8 7.714c-.371 0-.727-.15-.99-.418a1.443 1.443 0 01-.41-1.01V2h-7c-.371 0-.727.15-.99.418S5 3.05 5 3.428v17.143c0 .38.147.743.41 1.01.263.268.619.419.99.419h11.2c.371 0 .727-.15.99-.418.262-.268.41-.632.41-1.01V7.713h-4.2zm.147 4.079l-3.5 3.571a.7.7 0 01-.497.212.687.687 0 01-.497-.212l-1.4-1.428a.717.717 0 01-.206-.507.73.73 0 01.206-.508.696.696 0 01.994 0l.903.929 3.003-3.071a.696.696 0 01.994 0 .725.725 0 010 1.014z"
      fill={fill}
    />
    <path d="M18.587 6.286L14.8 2.42v3.865h3.787z" fill={fill} />
  </svg>
);

IconPageTick.defaultProps = {
  ...iconDefaultProps,
};

export default IconPageTick;
