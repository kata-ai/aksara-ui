import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconMixerFill: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-2.25 14.25h-.75a.75.75 0 11-1.5 0H6.75a.75.75 0 110-1.5H15a.75.75 0 111.5 0h.75a.75.75 0 110 1.5zm0-4.5H9a.75.75 0 11-1.5 0h-.75a.75.75 0 110-1.5h.75a.75.75 0 111.5 0h8.25a.75.75 0 110 1.5zm0-4.5h-.75a.75.75 0 11-1.5 0H6.75a.75.75 0 010-1.5H15a.75.75 0 111.5 0h.75a.75.75 0 110 1.5z"
      fill={fill}
    />
  </svg>
);

IconMixerFill.defaultProps = {
  ...iconDefaultProps,
};

export default IconMixerFill;
