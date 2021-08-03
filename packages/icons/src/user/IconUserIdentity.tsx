import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserIdentity: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7.152 9.635c.211-.102.443-.154.678-.151a1.513 1.513 0 011.478 1.915l-.157.766a1.334 1.334 0 01-2.642 0l-.157-.766a1.514 1.514 0 01.8-1.764z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm6.292 11.012l.014.072a3.83 3.83 0 10-4.953 0l.015-.072c.17-.743 1.207-1.315 2.462-1.315 1.255 0 2.291.572 2.462 1.315zM14 15h3a1 1 0 000-2h-3a1 1 0 100 2zm0-4h5a1 1 0 000-2h-5a1 1 0 100 2z"
      fill={fill}
    />
  </svg>
);

IconUserIdentity.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserIdentity;
