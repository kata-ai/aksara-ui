import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBubble4: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.621 7.145a3.995 3.995 0 00-6.09-2.456 3.184 3.184 0 00-1.726-.51 3.234 3.234 0 00-2.816 1.708 3.583 3.583 0 00-3.463 2.996 4.473 4.473 0 003.573 8.197 3.204 3.204 0 004.932.639c.509.2 1.05.304 1.597.31a4.321 4.321 0 001.487-.28l3.205 2.156a.69.69 0 001.048-.788l-1.208-3.735a4.312 4.312 0 00-.539-8.237z"
      fill={fill}
    />
  </svg>
);

IconBubble4.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubble4;
