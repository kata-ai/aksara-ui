import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconInvoice2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 2.73l-.18.14a.71.71 0 01-.89 0L16 2.16a.71.71 0 00-.89 0l-.9.71a.71.71 0 01-.89 0l-.89-.71a.72.72 0 00-.9 0l-.89.71a.71.71 0 01-.89 0l-.9-.71a.71.71 0 00-.89 0l-.89.71a.71.71 0 01-.89 0L6 2.73a.71.71 0 00-1.16.56v17.42a.71.71 0 001.16.56l.18-.14a.71.71 0 01.89 0l.89.71a.71.71 0 00.89 0l.9-.71a.71.71 0 01.89 0l.89.71a.72.72 0 00.9 0l.89-.71a.71.71 0 01.89 0l.9.71a.71.71 0 00.89 0l.89-.71a.71.71 0 01.89 0l.18.14a.71.71 0 001.16-.56V3.29A.71.71 0 0018 2.73zM9 7h6a1 1 0 110 2H9a1 1 0 010-2zm0 4h6a1 1 0 010 2H9a1 1 0 110-2zm0 4h6a1 1 0 010 2H9a1 1 0 110-2z"
      fill={fill}
    />
  </svg>
);

IconInvoice2.defaultProps = {
  ...iconDefaultProps,
};

export default IconInvoice2;
