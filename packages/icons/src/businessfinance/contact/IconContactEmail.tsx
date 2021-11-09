import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconContactEmail: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12.735 12.742a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={fill} />
    <path
      d="M19.5 3H6a1.5 1.5 0 00-1.5 1.5v3.75h-.75a.75.75 0 000 1.5h.75v4.5h-.75a.75.75 0 100 1.5h.75v3.75A1.5 1.5 0 006 21h13.5a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-4.44 9.232a.525.525 0 00.69-.502v-.218A2.512 2.512 0 0013.238 9h-.488a3 3 0 000 6 .75.75 0 110 1.5 4.5 4.5 0 110-9h.488a4.02 4.02 0 014.012 4.012v.218a2.024 2.024 0 01-2.67 1.92l-.24-.082a2.25 2.25 0 11-1.59-3.818A2.25 2.25 0 0115 12c.004.067.004.135 0 .203l.06.03z"
      fill={fill}
    />
  </svg>
);

IconContactEmail.defaultProps = {
  ...iconDefaultProps,
};

export default IconContactEmail;
