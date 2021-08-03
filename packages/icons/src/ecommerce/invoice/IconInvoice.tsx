import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconInvoice: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.86 2a2 2 0 00-2 2v16.71a.71.71 0 001.14.56l.18-.14a.71.71 0 01.89 0l.89.71a.71.71 0 00.89 0l.9-.71a.71.71 0 01.89 0l.89.71a.72.72 0 00.9 0l.89-.71a.71.71 0 01.89 0l.9.71a.71.71 0 00.89 0l.89-.71a.71.71 0 01.89 0l.18.14a.71.71 0 001.16-.56V4a2 2 0 00-2-2H6.86zM15 17H9a1 1 0 010-2h6a1 1 0 010 2zm0-4H9a1 1 0 010-2h6a1 1 0 010 2zm0-4H9a1 1 0 010-2h6a1 1 0 110 2z"
      fill={fill}
    />
  </svg>
);

IconInvoice.defaultProps = {
  ...iconDefaultProps,
};

export default IconInvoice;
