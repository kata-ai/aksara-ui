import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconHTML: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 3H6a2 2 0 00-2 2l.81 12.09A1.9 1.9 0 006 18.76l5.16 2.09c.515.2 1.085.2 1.6 0L18 18.76a1.9 1.9 0 001.23-1.64L20 5a2 2 0 00-2-2zM9.13 9.65h6.7a1 1 0 01.72.31.999.999 0 01.28.74l-.24 4.78a1 1 0 01-.53.83l-3.59 1.92a1.12 1.12 0 01-.47.11c-.163 0-.324-.038-.47-.11L8 16.31a1 1 0 01-.53-.83v-1a1.001 1.001 0 112-.11v.4L12 16.21l2.62-1.4.15-3.16H8.18a1 1 0 01-1-1l-.24-4.73a1 1 0 01.27-.74 1 1 0 01.72-.31h8.14a1 1 0 110 2H9l.13 2.78z"
      fill={fill}
    />
  </svg>
);

IconHTML.defaultProps = {
  ...iconDefaultProps,
};

export default IconHTML;
