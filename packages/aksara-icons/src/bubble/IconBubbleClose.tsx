import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBubbleClose: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.78 3.077a4 4 0 11-1.56 7.846 4 4 0 011.56-7.846zm-.769 5.34l.418.417a1 1 0 101.414-1.414l-.418-.418.42-.42a1 1 0 00-1.414-1.414l-.42.42-.43-.43a1 1 0 00-1.415 1.413l.431.431-.429.429a.998.998 0 00.323 1.634 1 1 0 001.091-.22l.43-.429zm-5.208-4.403A5.956 5.956 0 0011 7a6.007 6.007 0 006 6 5.958 5.958 0 002.925-.766 6.925 6.925 0 01-1.388 3.289 19.237 19.237 0 01-3.83 3.425c-.587.434-1.367.998-2.195 1.497l-.046.028a2.929 2.929 0 01-1.332.527.8.8 0 01-.803-.757 2.669 2.669 0 01.09-1.092.445.445 0 00-.348-.552 11.842 11.842 0 01-2.368-.654 8.113 8.113 0 01-3.182-2.394 6.989 6.989 0 01-1.5-3.746A7.1 7.1 0 016.947 5.13 9.503 9.503 0 0111.49 4c.062 0 .124.004.185.007l.127.007z"
      fill={fill}
    />
  </svg>
);

IconBubbleClose.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubbleClose;
