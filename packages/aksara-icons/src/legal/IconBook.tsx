import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBook: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 3H6a3 3 0 00-3 3v12a1.001 1.001 0 000 .17 3.163 3.163 0 000 .32A2.5 2.5 0 005.5 21H18a1 1 0 001-1v-2.17A3 3 0 0021 15V6a3 3 0 00-3-3zm-2.9 13l.24 2.15a.47.47 0 01-.68.46l-.94-.5a.46.46 0 00-.44 0l-.89.48a.47.47 0 01-.68-.45l.2-2.15H5.5a2.734 2.734 0 00-.5.05V6a1 1 0 011-1h12a1 1 0 011 1v9a1 1 0 01-.93 1H15.1z"
      fill={fill}
    />
  </svg>
);

IconBook.defaultProps = {
  ...iconDefaultProps,
};

export default IconBook;
