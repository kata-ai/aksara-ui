import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCoinPound: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm2.86 14.19H9.14a.77.77 0 01-.66-.39.76.76 0 010-.77 17.07 17.07 0 001.43-3h-.05a.75.75 0 110-1.5h.55c.08-.31.16-.63.22-.95A3.79 3.79 0 0112.19 7 4 4 0 0115 6.45a.753.753 0 01-.32 1.47 2.48 2.48 0 00-1.68.31 2.38 2.38 0 00-.91 1.63c0 .23-.09.45-.14.68h2.18a.75.75 0 110 1.5h-2.6a19.996 19.996 0 01-1.11 2.65h4.43a.75.75 0 110 1.5h.01z"
      fill={fill}
    />
  </svg>
);

IconCoinPound.defaultProps = {
  ...iconDefaultProps,
};

export default IconCoinPound;
