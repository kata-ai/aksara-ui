import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBagMedic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 7h-2.25V6a3 3 0 00-3-3h-3.5a3 3 0 00-3 3v1H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2zM9.25 6a1 1 0 011-1h3.5a1 1 0 011 1v1h-5.5V6zM15 15h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"
      fill={fill}
    />
  </svg>
);

IconBagMedic.defaultProps = {
  ...iconDefaultProps,
};

export default IconBagMedic;
