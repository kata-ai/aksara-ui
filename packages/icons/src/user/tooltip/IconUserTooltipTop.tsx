import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconUserTooltipTop: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 11.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={fill} />
    <path
      d="M21 18.75V7.5a2.25 2.25 0 00-2.25-2.25h-4.245L12.48 3.218a.75.75 0 00-1.065 0L9.383 5.25H5.25A2.25 2.25 0 003 7.5v11.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75zm-10.5-4.5h3a3 3 0 013 3 .75.75 0 11-1.5 0 1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5.75.75 0 11-1.5 0 3 3 0 013-3zm3.75-3.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      fill={fill}
    />
  </svg>
);

IconUserTooltipTop.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserTooltipTop;
