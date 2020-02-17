import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTextData: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7 15h7a1 1 0 110 2H7a1 1 0 010-2zm-1-3a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zm11-3.002H7a1 1 0 010-2h10a1 1 0 110 2z"
      fill={fill}
    />
  </svg>
);

IconTextData.defaultProps = {
  ...iconDefaultProps,
};

export default IconTextData;
