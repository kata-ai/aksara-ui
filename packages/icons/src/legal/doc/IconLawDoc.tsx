import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconLawDoc: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 3H8a3 3 0 00-3 3v9h2V6a1 1 0 011-1h10a1 1 0 011 1v10a3 3 0 01-3 3 2 2 0 01-2-2H3a4 4 0 004 4h9a5 5 0 005-5V6a3 3 0 00-3-3z"
      fill={fill}
    />
    <path d="M10 9h6a1 1 0 100-2h-6a1 1 0 000 2zM10 13h6a1 1 0 000-2h-6a1 1 0 000 2z" fill={fill} />
  </svg>
);

IconLawDoc.defaultProps = {
  ...iconDefaultProps,
};

export default IconLawDoc;
