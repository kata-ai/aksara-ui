import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPrint: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.5 6.75h-2.25v-1.5A2.25 2.25 0 0015 3H8.25A2.25 2.25 0 006 5.25v1.5H4.5A1.5 1.5 0 003 8.25v7.5a1.5 1.5 0 001.5 1.5h.615l-.218 1.035A2.25 2.25 0 007.095 21h9.81a2.25 2.25 0 002.197-2.715l-.217-1.035h.615a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5zm-12-1.5a.75.75 0 01.75-.75H15a.75.75 0 01.75.75v1.5H7.5v-1.5zm9.983 13.973a.751.751 0 01-.578.277h-9.81a.75.75 0 01-.75-.907l1.013-4.718h9.284l.99 4.718a.749.749 0 01-.15.63zM18.75 9.75h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5z"
      fill={fill}
    />
  </svg>
);

IconPrint.defaultProps = {
  ...iconDefaultProps,
};

export default IconPrint;
