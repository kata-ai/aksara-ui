import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconJQuery: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 3H6a2 2 0 00-2 2l.81 12.09A1.9 1.9 0 006 18.76l5.16 2.09c.515.2 1.085.2 1.6 0L18 18.76a1.9 1.9 0 001.23-1.64L20 5a2 2 0 00-2-2zm-1.29 10.05a1 1 0 01-1 .95h-2.29L13 16.2a1 1 0 01-1 .8H9a1 1 0 010-2h2.18l.2-1H8.31a1 1 0 01-1-.95l-.37-7.13a1 1 0 01.27-.74 1 1 0 01.72-.31h8.14a1 1 0 01.72.31 1 1 0 01.27.74l-.35 7.13z"
      fill={fill}
    />
    <path d="M9.25 12h2.53l.22-1.2a1.02 1.02 0 112 .4l-.16.8h.94L15 6.87H9L9.25 12z" fill={fill} />
  </svg>
);

IconJQuery.defaultProps = {
  ...iconDefaultProps,
};

export default IconJQuery;
