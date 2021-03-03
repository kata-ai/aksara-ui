import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconArrowUpRounded: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.71 10.7a1.002 1.002 0 01-1.42 0L13 10.41V16a1 1 0 01-2 0v-5.58l-2.29 2.29a1.001 1.001 0 01-1.639-.325 1 1 0 01.219-1.095l4-4a1.11 1.11 0 01.34-.22.74.74 0 01.25 0A.499.499 0 0112 7c.134.003.266.03.39.08a.18.18 0 01.07 0 .82.82 0 01.25.16l4 4a.999.999 0 010 1.46zm-5.09-5.62c.083-.01.167-.01.25 0a.74.74 0 00-.25 0z"
      fill={fill}
    />
  </svg>
);

IconArrowUpRounded.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowUpRounded;
