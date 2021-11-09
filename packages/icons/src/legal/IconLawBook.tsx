import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconLawBook: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M7.14 14.5h2.72L8.5 12.8l-1.36 1.7zM14.14 14.5h2.72l-1.36-1.7-1.36 1.7z" fill={fill} />
    <path
      d="M18 7H8a1 1 0 010-2h8a1 1 0 100-2H7a3 3 0 00-3 3v13a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2zm0 7.57a2.5 2.5 0 01-5 0 .2.2 0 010-.07.45.45 0 01.11-.31l1.35-1.69H9.54l1.35 1.69a.5.5 0 01.1.31v.07a2.5 2.5 0 01-5 0 .2.2 0 010-.07.45.45 0 01.11-.31l2-2.5a.38.38 0 01.12-.09.541.541 0 01.21-.05h3V10.1a.5.5 0 011 0v1.4h3a.54.54 0 01.21.05c.04.024.078.055.11.09l2 2.5a.5.5 0 01.1.31v.07l.15.05z"
      fill={fill}
    />
  </svg>
);

IconLawBook.defaultProps = {
  ...iconDefaultProps,
};

export default IconLawBook;
