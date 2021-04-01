import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconSuitcase3: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 11.25a.75.75 0 111.5 0V12h3v-.75a.75.75 0 111.5 0V12h1.5V6h-.75V4.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5V6H7.5v6H9v-.75zm5.25-6.75V6h-4.5V4.5h4.5z"
      fill={fill}
    />
    <path
      d="M19.5 6H18v6a1.5 1.5 0 01-1.5 1.5H15v.75a.75.75 0 11-1.5 0v-.75h-3v.75a.75.75 0 11-1.5 0v-.75H7.5A1.5 1.5 0 016 12V6H4.5A1.5 1.5 0 003 7.5v12A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0019.5 6z"
      fill={fill}
    />
  </svg>
);

IconSuitcase3.defaultProps = {
  ...iconDefaultProps,
};

export default IconSuitcase3;
