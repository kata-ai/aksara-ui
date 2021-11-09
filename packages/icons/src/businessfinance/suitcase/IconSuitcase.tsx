import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconSuitcase: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 7h2c1.1 0 2 .9 2 2v2H3V9c0-1.1.9-2 2-2h2V6c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v1zm-7-2c-.6 0-1 .4-1 1v1h6V6c0-.6-.4-1-1-1h-4z"
      fill={fill}
    />
    <path d="M5 21c-1.1 0-2-.9-2-2v-6h18v6c0 1.1-.9 2-2 2H5z" fill={fill} />
  </svg>
);

IconSuitcase.defaultProps = {
  ...iconDefaultProps,
};

export default IconSuitcase;
