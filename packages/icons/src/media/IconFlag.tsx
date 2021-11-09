import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconFlag: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2 7C2 5.89543 2.89543 5 4 5H19.8258C20.6801 5 21.141 6.00212 20.585 6.65079L17.1156 10.6984C16.4737 11.4474 16.4737 12.5526 17.1156 13.3016L20.585 17.3492C21.141 17.9979 20.6801 19 19.8258 19H4C2.89543 19 2 18.1046 2 17V7Z"
      fill={fill}
    />
  </svg>
);

IconFlag.defaultProps = {
  ...iconDefaultProps,
};

export default IconFlag;
