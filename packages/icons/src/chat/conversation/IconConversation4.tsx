import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconConversation4: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.865 15.993a9.027 9.027 0 00.777-5.67 9.004 9.004 0 00-2.786-4.992 8.933 8.933 0 00-10.767-.963 8.988 8.988 0 00-3.622 4.42 9.029 9.029 0 00-.233 5.717 8.996 8.996 0 003.249 4.703 8.937 8.937 0 005.417 1.783 8.743 8.743 0 003.983-1l4.131 1a.745.745 0 00.836-.54.753.753 0 00.01-.36l-.935-4.098h-.06zm-7.965 1a4.963 4.963 0 01-2.27-.58h.05l-2.25.58a.416.416 0 01-.47-.298.421.421 0 01-.008-.202l.548-2.299h.05a5.015 5.015 0 011.145-5.918 4.968 4.968 0 015.985-.505 4.994 4.994 0 012 2.466 5.016 5.016 0 01.113 3.178 4.997 4.997 0 01-1.818 2.603 4.965 4.965 0 01-3.015.975h-.06z"
      fill={fill}
    />
  </svg>
);

IconConversation4.defaultProps = {
  ...iconDefaultProps,
};

export default IconConversation4;
