import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCMS: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.884 3.172a1 1 0 01.367.457l3.352 8.38H3.396l3.352-8.38A1 1 0 017.677 3h8.646a1 1 0 01.56.172zM9.5 9h5a1 1 0 100-2h-5a1 1 0 000 2zm4.227 6.45a2.983 2.983 0 001.09-1.45H21v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5h6.184a2.983 2.983 0 004.543 1.45z"
      fill={fill}
    />
  </svg>
);

IconCMS.defaultProps = {
  ...iconDefaultProps,
};

export default IconCMS;
