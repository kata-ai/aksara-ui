import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCartAdd: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.196 5h12.79c.7 0 1.099.6.999 1.3l-1.3 4.2c-.199.9-.998 1.5-1.897 1.5H8.495l.2 1.2c.1.5.5.8 1 .8h8.292c.6 0 1 .4 1 1s-.4 1-1 1H9.694c-1.498 0-2.697-1-2.997-2.5L5.298 5.8c-.1-.5-.5-.8-1-.8H4C3.4 5 3 4.6 3 4s.4-1 1-1h.299c1.299 0 2.398.8 2.897 2zM13.5 6.5a.5.5 0 00-1 0V8H11a.5.5 0 000 1h1.5v1.5a.5.5 0 001 0V9H15a.5.5 0 000-1h-1.5V6.5z"
      fill={fill}
    />
    <path
      d="M10.494 21a1.5 1.5 0 10-.002-2.999A1.5 1.5 0 0010.494 21zM15.49 21a1.5 1.5 0 10-.002-2.999A1.5 1.5 0 0015.49 21z"
      fill={fill}
    />
  </svg>
);

IconCartAdd.defaultProps = {
  ...iconDefaultProps,
};

export default IconCartAdd;
