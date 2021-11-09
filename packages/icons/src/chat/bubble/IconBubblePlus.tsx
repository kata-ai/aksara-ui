import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBubbleEdit: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.778 3.674a4 4 0 114.444 6.652 4 4 0 01-4.444-6.652zm3.231 4.32h.59a1 1 0 100-2h-.59V5.4a1 1 0 00-2 0v.594H15.4a1 1 0 100 2h.61V8.6a1 1 0 102 0v-.606zm-6.206-3.98A5.956 5.956 0 0011 7a6.007 6.007 0 006 6 5.958 5.958 0 002.925-.766 6.925 6.925 0 01-1.388 3.289 19.237 19.237 0 01-3.83 3.425c-.587.434-1.367.998-2.195 1.497l-.046.028a2.929 2.929 0 01-1.332.527.8.8 0 01-.803-.757 2.669 2.669 0 01.09-1.092.445.445 0 00-.348-.552 11.842 11.842 0 01-2.368-.654 8.113 8.113 0 01-3.182-2.394 6.989 6.989 0 01-1.5-3.746A7.1 7.1 0 016.947 5.13 9.503 9.503 0 0111.49 4c.062 0 .124.004.185.007l.127.007z"
      fill={fill}
    />
  </svg>
);

IconBubbleEdit.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubbleEdit;
