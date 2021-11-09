import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconUserRoundMinus: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M10.48 10.518c2.063 0 3.734-1.68 3.734-3.754 0-2.072-1.671-3.753-3.734-3.753-2.062 0-3.734 1.68-3.734 3.753 0 2.073 1.672 3.753 3.734 3.753zM2.996 15.757v1.501c0 .597.236 1.17.656 1.592.42.423.99.66 1.585.66h4.93a6.78 6.78 0 010-7.506H6.73c-.99 0-1.94.395-2.641 1.099a3.763 3.763 0 00-1.094 2.654zM15.768 10.502a5.21 5.21 0 00-2.905.886 5.249 5.249 0 00-1.925 2.358 5.278 5.278 0 001.133 5.726 5.205 5.205 0 005.698 1.139 5.234 5.234 0 002.346-1.935 5.273 5.273 0 00-.65-6.635 5.215 5.215 0 00-3.697-1.539zm1.42 6.005H14.2a.745.745 0 01-.747-.75.752.752 0 01.747-.75h2.987a.745.745 0 01.747.75.752.752 0 01-.747.75z"
      fill={fill}
    />
  </svg>
);

IconUserRoundMinus.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserRoundMinus;
