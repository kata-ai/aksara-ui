import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconModuleLibrary: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.884 3.241a1.74 1.74 0 00-1.767 0L3.832 6.933l7.082 4.665 7.178-4.71-6.208-3.647zM3 8.552v7.213a1.832 1.832 0 00.894 1.582L10.111 21v-7.794a1.706 1.706 0 01-.157-.073L3 8.553zM13 18h7a1 1 0 010 2h-7a1 1 0 010-2zm7-4h-7a1 1 0 000 2h7a1 1 0 000-2zm-3.707-2.293A1 1 0 0117 10h3a1 1 0 010 2h-3a1 1 0 01-.707-.293z"
      fill={fill}
    />
  </svg>
);

IconModuleLibrary.defaultProps = {
  ...iconDefaultProps,
};

export default IconModuleLibrary;
