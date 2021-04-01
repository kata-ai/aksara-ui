import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPerformance: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2zM18.925 6.62A.997.997 0 0018 6h-6a1 1 0 100 2h3.586l-3.856 3.856-2.414-.805A1 1 0 008.2 11.4l-3 4a1 1 0 001.6 1.2l2.568-3.423 2.316.772a1 1 0 001.023-.242L17 9.414V13a1 1 0 102 0V6.985a.996.996 0 00-.075-.366z"
      fill={fill}
    />
  </svg>
);

IconPerformance.defaultProps = {
  ...iconDefaultProps,
};

export default IconPerformance;
