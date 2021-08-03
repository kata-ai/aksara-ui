import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconLeads: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16 10.78a1 1 0 00-.84-.51 1.08 1.08 0 00-.87.46L12.76 13l-1.94-4.13v-1h3.36a1 1 0 00.82-.44 1 1 0 00.05-1l-.51-1 .51-1a1 1 0 00-.05-1 1 1 0 00-.82-.43H9.82a1 1 0 00-1 1v4.84l-5.7 10.69A1 1 0 004 21h16a1 1 0 00.87-1.49L16 10.78zM11.29 19H5.67l4.09-7.67L13.34 19h-2.05z"
      fill={fill}
    />
  </svg>
);

IconLeads.defaultProps = {
  ...iconDefaultProps,
};

export default IconLeads;
