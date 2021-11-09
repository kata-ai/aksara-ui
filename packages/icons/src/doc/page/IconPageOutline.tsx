import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPageOutline: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.32 3.07A3 3 0 0014 2H6a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3v-9a1 1 0 01-1 1h-1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h7v-.63a1 1 0 012 0v1.24L18.71 9H20a1 1 0 011 1v-.29a3 3 0 00-.71-1.93l-3.97-4.71z"
      fill={fill}
    />
    <path d="M20 9h-4a1 1 0 01-1-1V3.37a1 1 0 00-2 0V8a3 3 0 003 3h4a1 1 0 000-2z" fill={fill} />
  </svg>
);

IconPageOutline.defaultProps = {
  ...iconDefaultProps,
};

export default IconPageOutline;
