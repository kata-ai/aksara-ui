import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCalendar: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.946 16.622h5.368a.973.973 0 010 1.946H4.946A1.948 1.948 0 013 16.622V6.649a1.948 1.948 0 011.946-1.946h.608v-.73a.973.973 0 011.946 0v.73h6.568v-.73a.973.973 0 011.946 0v.73h.608a1.948 1.948 0 011.946 1.946v3.648a.973.973 0 11-1.946 0v-1.21H4.946v7.535zm10-2.75a3.892 3.892 0 114.324 6.473 3.892 3.892 0 01-4.324-6.473zm3.144 4.203h.575a.973.973 0 000-1.947h-.575v-.576a.973.973 0 10-1.946 0v.576h-.593a.973.973 0 000 1.947h.593v.59a.973.973 0 001.946 0v-.59z"
      fill={fill}
    />
  </svg>
);

IconCalendar.defaultProps = {
  ...iconDefaultProps,
};

export default IconCalendar;
