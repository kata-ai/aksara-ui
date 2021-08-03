import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPenDoc: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12.79 15.41a1.94 1.94 0 00-.57 1.37.62.62 0 00.61.61 1.9 1.9 0 001.37-.57l4.39-4.38L17.17 11l-4.38 4.41z"
      fill={fill}
    />
    <path
      d="M20.71 8.9a1 1 0 00-1.42 0l-1.41 1.42 1.41 1.41.38.38a.47.47 0 010 .66l-.73.73a.502.502 0 10.71.71l.73-.73a1.48 1.48 0 000-2.08L20 11l.71-.7a1 1 0 000-1.4z"
      fill={fill}
    />
    <path
      d="M17 17a1 1 0 00-1 1 1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h9a1 1 0 011 1v2a1 1 0 002 0V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h9a3 3 0 003-3 1 1 0 00-1-1z"
      fill={fill}
    />
    <path d="M14 8a1 1 0 00-1-1H8a1 1 0 000 2h5a1 1 0 001-1zM8 11a1 1 0 000 2h3a1 1 0 000-2H8z" fill={fill} />
  </svg>
);

IconPenDoc.defaultProps = {
  ...iconDefaultProps,
};

export default IconPenDoc;
