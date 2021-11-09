import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconUserTooltipBottom: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={fill} />
    <path
      d="M18.75 18.75A2.25 2.25 0 0021 16.5V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25V16.5a2.25 2.25 0 002.25 2.25h4.245l2.025 2.032a.75.75 0 00.533.218.748.748 0 00.532-.218l2.032-2.032h4.133zM9 15a.75.75 0 11-1.5 0 3 3 0 013-3h3a3 3 0 013 3 .75.75 0 11-1.5 0 1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 009 15zm5.25-6.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      fill={fill}
    />
  </svg>
);

IconUserTooltipBottom.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserTooltipBottom;
