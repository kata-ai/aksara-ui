import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconInfo: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm1 9c0 .6-.4 1-1 1s-1-.4-1-1v-5c0-.6.4-1 1-1s1 .4 1 1v5z"
      fill={fill}
    />
  </svg>
);

IconInfo.defaultProps = {
  ...iconDefaultProps,
};

export default IconInfo;
