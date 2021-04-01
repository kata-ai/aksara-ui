import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCSS3: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 3H6a2 2 0 00-2 2l.81 12.09A1.9 1.9 0 006 18.76l5.16 2.09c.515.2 1.085.2 1.6 0L18 18.76a1.9 1.9 0 001.23-1.64L20 5a2 2 0 00-2-2zm-1.42 3.72l-4.83 2.93h4.07a1 1 0 011 1.09l-.43 4.78a1.001 1.001 0 01-.53.79l-3.59 1.92c-.146.072-.307.11-.47.11a1.12 1.12 0 01-.47-.11l-3.58-1.92a1 1 0 01-.52-.83l-.05-1a1.001 1.001 0 112-.11v.4l2.6 1.39 2.64-1.41.29-3.15H8.17a1 1 0 01-.51-1.86l4.82-2.92H7.93a1 1 0 010-2h8.14a1 1 0 011 .73 1 1 0 01-.49 1.17z"
      fill={fill}
    />
  </svg>
);

IconCSS3.defaultProps = {
  ...iconDefaultProps,
};

export default IconCSS3;
