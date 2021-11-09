import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCoinDollar: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zm.75 15.69V18a.75.75 0 11-1.5 0v-.817a3.578 3.578 0 01-2.76-1.86.75.75 0 01.931-1.028.75.75 0 01.427.383A2.377 2.377 0 0012 15.75c1.223 0 2.25-.69 2.25-1.5a1.02 1.02 0 00-.66-1.035 7.627 7.627 0 00-1.838-.465 14.24 14.24 0 01-1.02-.195A2.88 2.88 0 018.25 9.75c0-1.447 1.29-2.662 3-2.94V6a.75.75 0 111.5 0v.817a3.592 3.592 0 012.76 1.86.752.752 0 01-1.357.646A2.377 2.377 0 0012 8.25c-1.223 0-2.25.69-2.25 1.5 0 .66.48 1.148 1.32 1.335.322.075.623.127.93.18.75.096 1.484.29 2.182.577a2.513 2.513 0 011.568 2.408c0 1.447-1.29 2.663-3 2.94z"
      fill={fill}
    />
  </svg>
);

IconCoinDollar.defaultProps = {
  ...iconDefaultProps,
};

export default IconCoinDollar;
