import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconGif: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9.5 13.5V13H8.44a.5.5 0 010-1H10a.5.5 0 01.5.5V14a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h4a.5.5 0 010 1H6.5v3h3zm3 .5a.5.5 0 01-1 0v-4a.5.5 0 011 0v4zm5.5-3.5h-3.5v1H17a.5.5 0 010 1h-2.5V14a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5h4a.5.5 0 010 1z"
      fill="#313F4E"
    />
  </svg>
);

IconGif.defaultProps = {
  ...iconDefaultProps,
};

export default IconGif;
