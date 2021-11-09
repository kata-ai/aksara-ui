import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPerformance2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.747 3.474A10 10 0 0120.01 17.968a1 1 0 01-1.604-.003c-.743-1-2.053 2.935-3.166 2.373-1.112-.56-2.495.665-3.741.662-1.246.003-2.5-.5-3.5-1-1.113.562-1.664-3.036-2.407-2.035a1 1 0 01-1.604.003A10 10 0 016.747 3.474zM12 13.73l.002-1a10 10 0 017.085 2.965A8.002 8.002 0 0012 3.983a8 8 0 00-7.087 11.712 10 10 0 017.085-2.965l.002 1z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2a1 1 0 011 1v2.08a1 1 0 11-2 0V3a1 1 0 011-1zM6.998 3.345a1 1 0 011.367.363l1.04 1.79a1 1 0 01-1.73 1.004l-1.04-1.79a1 1 0 01.363-1.367zM3.345 6.998a1 1 0 011.367-.363l1.79 1.04a1 1 0 11-1.004 1.73l-1.79-1.04a1 1 0 01-.363-1.367zM2 12a1 1 0 011-1h2.08a1 1 0 110 2H3a1 1 0 01-1-1zM17.92 12a1 1 0 011-1H21a1 1 0 110 2h-2.08a1 1 0 01-1-1zM20.655 6.998a1 1 0 01-.363 1.367l-1.79 1.04a1 1 0 01-1.004-1.73l1.79-1.04a1 1 0 011.367.363zM17.002 3.345a1 1 0 01.363 1.367l-1.04 1.79a1 1 0 11-1.73-1.004l1.04-1.79a1 1 0 011.367-.363zM15.24 7.658a1 1 0 01.412 1.353l-2.77 5.19a1 1 0 11-1.764-.942l2.77-5.19a1 1 0 011.353-.411z"
      fill={fill}
    />
  </svg>
);

IconPerformance2.defaultProps = {
  ...iconDefaultProps,
};

export default IconPerformance2;
