import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconHome2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.984 3c-.243 0-.478.09-.661.25l-8.015 7a1 1 0 00.608 1.717c.258.023.513-.055.714-.217l.341-.3V9v10a1.998 1.998 0 002.004 2H9.98v-3a1.998 1.998 0 012.004-2 2.006 2.006 0 012.004 2v3h3.006a2.006 2.006 0 002.004-2v-7.55l.34.3a1.002 1.002 0 001.413-.09.999.999 0 00-.09-1.41l-8.016-7a1.003 1.003 0 00-.66-.25z"
      fill={fill}
    />
  </svg>
);

IconHome2.defaultProps = {
  ...iconDefaultProps,
};

export default IconHome2;
