import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCollectionDouble: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 2H9a2 2 0 00-2 2v2H5.71A1.66 1.66 0 004 7.6v13.59a.86.86 0 001.2.73l4.38-1.78a.998.998 0 01.34-.06c.113 0 .225.02.33.06l4.56 1.8c.106.038.217.059.33.06a.83.83 0 00.86-.8v-4.94l2.46 1.58A1 1 0 0020 17V4a2 2 0 00-2-2zm0 13.17l-1.55-1A.91.91 0 0016 14V7.6A1.66 1.66 0 0014.29 6H9V4h9v11.17z"
      fill={fill}
    />
  </svg>
);

IconCollectionDouble.defaultProps = {
  ...iconDefaultProps,
};

export default IconCollectionDouble;
