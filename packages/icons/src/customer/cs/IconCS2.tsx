import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCS2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 10.5C19.7 6.3 16.2 3 12 3s-7.7 3.3-8 7.5c-.6.5-1 1.2-1 2v3C3 16.9 4.1 18 5.5 18S8 16.9 8 15.5v-3c0-1.2-.8-2.2-1.9-2.4C6.5 7.2 9 5 12 5c3 0 5.5 2.2 5.9 5.1-1.1.2-1.9 1.2-1.9 2.4v3c0 .8.4 1.5.9 1.9-.2.4-.5.6-.9.6h-3.3c-.3-.6-1-1-1.7-1-1.1 0-2 .9-2 2s.9 2 2 2c.7 0 1.4-.4 1.7-1H16c1.3 0 2.4-.9 2.8-2 1.2-.2 2.2-1.2 2.2-2.5v-3c0-.8-.4-1.6-1-2z"
      fill={fill}
    />
  </svg>
);

IconCS2.defaultProps = {
  ...iconDefaultProps,
};

export default IconCS2;
