import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconPhrase: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H4a2 2 0 00-2 2.001v10.006a2.002 2.002 0 002.388 1.955 2 2 0 001.022-.544l.83-.82c.373-.376.88-.589 1.41-.59H20a2 2 0 002-2.002V7.001A2.002 2.002 0 0020 5zm-8.48 6.004a1.5 1.5 0 01-1.52 1.5.5.5 0 010-1 .5.5 0 00.5-.48h-1a1 1 0 01-1-1.001v-1.02a1 1 0 011-1.001h1a1 1 0 011 1v.73l.02 1.272zm4 0a1.5 1.5 0 01-1.52 1.5.5.5 0 010-1 .5.5 0 00.49-.48h-1a1 1 0 01-1-1.001v-1.02a1.001 1.001 0 011-1.001h1a1 1 0 011 1v.73l.03 1.272z"
      fill={fill}
    />
  </svg>
);

IconPhrase.defaultProps = {
  ...iconDefaultProps,
};

export default IconPhrase;
