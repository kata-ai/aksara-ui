import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconHeartChart: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4.54 13.09l6.463 6.47a1.47 1.47 0 002.1 0l6.412-6.47a5.38 5.38 0 000-7.53 5.241 5.241 0 00-7.462 0 5.242 5.242 0 00-7.463 0 5.38 5.38 0 000 7.53h-.05zm8.173-4.8l1.7 1.71h1.591a1 1 0 010 2h-2a1.001 1.001 0 01-.71-.29l-.68-.71-.441 2.2-.19 1a1 1 0 01-.69.76.999.999 0 01-.29.04 1.001 1.001 0 01-.71-.29L8.591 13h-.59a1 1 0 010-2h1a1.001 1.001 0 01.71.29l.68.68.26-1.3.35-1.87a1 1 0 01.71-.8 1 1 0 011.001.29z"
      fill={fill}
    />
  </svg>
);

IconHeartChart.defaultProps = {
  ...iconDefaultProps,
};

export default IconHeartChart;
