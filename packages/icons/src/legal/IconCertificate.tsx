import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCertificate: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M14.92 15.47a.28.28 0 00-.12-.47l-.48-.12a.27.27 0 01-.2-.33l.14-.48a.27.27 0 00-.34-.33l-.47.13a.27.27 0 01-.34-.19l-.11-.47a.26.26 0 00-.45-.12l-.35.35a.259.259 0 01-.38 0l-.35-.35a.26.26 0 00-.45.12l-.12.48a.27.27 0 01-.34.19l-.47-.13a.27.27 0 00-.34.33l.14.48a.27.27 0 01-.2.33L9.2 15a.28.28 0 00-.12.46l.36.34a.29.29 0 010 .39l-.36.34a.28.28 0 00.12.47l.48.12a.28.28 0 01.2.34l-.14.47a.27.27 0 00.34.33l.42-.12v3.34a.5.5 0 00.31.46.53.53 0 00.55-.11l.64-.65.64.65A.51.51 0 0013 22c.063.01.127.01.19 0a.5.5 0 00.31-.46v-3.4l.43.12a.27.27 0 00.34-.33l-.14-.47a.28.28 0 01.2-.34l.47-.12a.28.28 0 00.12-.46l-.36-.34a.29.29 0 010-.39l.36-.34zM12 14.75a1.26 1.26 0 110 2.52 1.26 1.26 0 010-2.52z"
      fill={fill}
    />
    <path
      d="M18 2H6a3 3 0 00-3 3v12a3 3 0 003 3h3v-2H6a1 1 0 01-1-1V5a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1h-3v2h3a3 3 0 003-3V5a3 3 0 00-3-3z"
      fill={fill}
    />
    <path d="M15 8a1 1 0 100-2H9a1 1 0 000 2h6zM7 11a1 1 0 001 1h8a1 1 0 000-2H8a1 1 0 00-1 1z" fill={fill} />
  </svg>
);

IconCertificate.defaultProps = {
  ...iconDefaultProps,
};

export default IconCertificate;
