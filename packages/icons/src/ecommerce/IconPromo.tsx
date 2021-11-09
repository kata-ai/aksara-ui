import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconPromo: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4.28 14.14a2.44 2.44 0 002 3.58l1.74.06a1.2 1.2 0 011 .57l.92 1.5a2.39 2.39 0 004.08 0l.92-1.5a1.2 1.2 0 011-.57l1.74-.06a2.44 2.44 0 002-3.58l-.82-1.57a1.21 1.21 0 010-1.14l.82-1.57a2.441 2.441 0 00-2-3.58l-1.74-.06a1.2 1.2 0 01-1-.57L14 4.15a2.39 2.39 0 00-4.08 0L9 5.65a1.2 1.2 0 01-1 .57l-1.74.06a2.44 2.44 0 00-2 3.58l.82 1.57a1.21 1.21 0 010 1.14l-.8 1.57zM16 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-2.14-5.78a1.004 1.004 0 111.42 1.42l-5.14 5.14a1 1 0 01-.71.29 1 1 0 01-.71-1.71l5.14-5.14zM9.5 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
      fill={fill}
    />
  </svg>
);

IconPromo.defaultProps = {
  ...iconDefaultProps,
};

export default IconPromo;
