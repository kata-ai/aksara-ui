import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPage: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 3v5c0 1.7 1.3 3 3 3h4v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h7zm2 5V3.1L20 9h-4c-.6 0-1-.4-1-1z"
      fill={fill}
    />
  </svg>
);

IconPage.defaultProps = {
  ...iconDefaultProps,
};

export default IconPage;
