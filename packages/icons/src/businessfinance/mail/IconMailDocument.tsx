import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMailDocument: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.302 8.145L18 6.683V4.5A1.5 1.5 0 0016.5 3h-9A1.5 1.5 0 006 4.5v2.183L3.697 8.145A1.5 1.5 0 003 9.413V19.5A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5V9.412a1.5 1.5 0 00-.698-1.267zM18 8.46l1.5.952v.675l-1.5.953V8.46zM7.5 4.5h9V12L12 14.857 7.5 12V4.5zm-3 4.912L6 8.46v2.58l-1.5-.952v-.675z"
      fill={fill}
    />
    <path
      d="M9.75 7.5h4.5a.75.75 0 100-1.5h-4.5a.75.75 0 000 1.5zM15 9.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h4.5a.75.75 0 00.75-.75z"
      fill={fill}
    />
  </svg>
);

IconMailDocument.defaultProps = {
  ...iconDefaultProps,
};

export default IconMailDocument;
