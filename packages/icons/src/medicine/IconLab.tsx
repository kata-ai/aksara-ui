import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconLab: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17.402 13.68l-2.004-3.35V4.2h.49a1.104 1.104 0 001.103-1.1A1.099 1.099 0 0015.89 2H8.11A1.104 1.104 0 007.01 3.1 1.099 1.099 0 008.11 4.2h.491v6.13l-2.666 4.56-2.706 4.65a1.667 1.667 0 00.655 2.246c.253.142.539.215.829.214h14.612a1.676 1.676 0 001.472-.819 1.667 1.667 0 00.012-1.681l-3.408-5.82zM13.393 4.2v6.13c0 .351.094.696.27 1l.692 1.19c-.711.21-1.563.45-2.636.73a11.24 11.24 0 01-2.776.4l1.353-2.32c.177-.304.27-.649.27-1V4.2h2.827z"
      fill={fill}
    />
  </svg>
);

IconLab.defaultProps = {
  ...iconDefaultProps,
};

export default IconLab;
