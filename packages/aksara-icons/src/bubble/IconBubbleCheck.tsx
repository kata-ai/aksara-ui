import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBubbleCheck: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.778 3.674a4 4 0 114.444 6.652 4 4 0 01-4.444-6.652zm2.044 5.2a1 1 0 00.324-.217l1.912-1.913a1 1 0 10-1.414-1.414L16.44 6.536l-.065-.066a1 1 0 00-1.414 1.414l.772.773a1 1 0 001.09.217zm-5.018-4.86A5.956 5.956 0 0011 7a6.007 6.007 0 006 6 5.958 5.958 0 002.925-.766 6.925 6.925 0 01-1.388 3.289 19.234 19.234 0 01-3.83 3.425c-.588.434-1.367.998-2.195 1.497l-.046.028a2.928 2.928 0 01-1.332.527.8.8 0 01-.803-.757 2.672 2.672 0 01.09-1.092.45.45 0 00-.087-.401.438.438 0 00-.261-.15 11.841 11.841 0 01-2.368-.655 8.113 8.113 0 01-3.182-2.394 6.99 6.99 0 01-1.5-3.746A7.1 7.1 0 016.946 5.13 9.503 9.503 0 0111.491 4c.062 0 .123.004.185.007l.127.007z"
      fill={fill}
    />
  </svg>
);

IconBubbleCheck.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubbleCheck;
