import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPanelAnalytic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 18h1.97a1 1 0 010 2H5a2.002 2.002 0 01-2-2V5a2.002 2.002 0 012-2h13a2.002 2.002 0 012 2v6a1 1 0 01-2 0V8H5v10z"
      fill={fill}
    />
    <path
      d="M20.332 14.063c.14.048.269.126.375.23a.982.982 0 01.272.815L21 18.995A1 1 0 0120.006 20H20a1 1 0 01-1-.995l-.009-1.583-3.286 3.285a1.001 1.001 0 01-.707.293h-.002a1 1 0 01-.708-.296l-1.285-1.295-1.295 1.297a1 1 0 01-1.416-1.412l2.005-2.01a.942.942 0 01.71-.293 1 1 0 01.708.296L15 18.583l2.576-2.575L15.995 16A1 1 0 1116 14h.005l3.89.02a.982.982 0 01.437.043z"
      fill={fill}
    />
  </svg>
);

IconPanelAnalytic.defaultProps = {
  ...iconDefaultProps,
};

export default IconPanelAnalytic;
