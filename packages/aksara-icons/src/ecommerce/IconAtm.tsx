import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconAtm: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M7 10.5H5v1h2v-1z" fill={fill} />
    <path
      d="M20 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zM8 12v2a.5.5 0 01-1 0v-1.5H5V14a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v2zm5.5-1.5H12V14a.5.5 0 01-1 0v-3.5H9.5a.5.5 0 010-1h4a.5.5 0 010 1zM20 14a.5.5 0 01-1 0v-3.5h-1V14a.5.5 0 01-1 0v-3.5h-1V14a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4z"
      fill={fill}
    />
  </svg>
);

IconAtm.defaultProps = {
  ...iconDefaultProps,
};

export default IconAtm;
