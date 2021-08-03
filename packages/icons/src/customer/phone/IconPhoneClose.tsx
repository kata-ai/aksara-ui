import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPhoneClose: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.685 4.708a1.003 1.003 0 00-1.418-1.418l-1.288 1.298 1.408 1.408 1.298-1.288zM20.305 15.524l-3.994-1.608a1.08 1.08 0 00-1.148.24l-1.109 1.108a1.058 1.058 0 01-1.328.15 14.98 14.98 0 01-4.154-4.155 1.059 1.059 0 01.15-1.328L9.93 8.722a1.089 1.089 0 00.29-.938l-.7-3.905A1.059 1.059 0 008.523 3H5.137A2.147 2.147 0 003 5.437a18.136 18.136 0 0015.538 15.54 2.147 2.147 0 002.437-2.138v-2.047c0-.72-.27-1.109-.67-1.269z"
      fill={fill}
    />
    <path
      d="M15.273 8.702a.998.998 0 001.418 0l1.288-1.298 1.288 1.298a.998.998 0 001.418 0 .997.997 0 000-1.418l-1.298-1.288-1.408-1.408L16.69 3.29a1.002 1.002 0 10-1.418 1.418l1.298 1.288-1.298 1.288a.999.999 0 000 1.418z"
      fill={fill}
    />
  </svg>
);

IconPhoneClose.defaultProps = {
  ...iconDefaultProps,
};

export default IconPhoneClose;
