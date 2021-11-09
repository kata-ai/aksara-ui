import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconMedium: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21 3H3v18h18V3z" fill={fill} />
    <path
      d="M7.295 9.02a.468.468 0 00-.152-.395l-1.13-1.36v-.203H9.52l2.71 5.942 2.382-5.942h3.342v.203l-.966.925a.282.282 0 00-.107.271v6.8a.282.282 0 00.107.272l.943.925v.204H13.19v-.204l.977-.948c.096-.096.096-.124.096-.27V9.741l-2.716 6.897h-.367L8.018 9.742v4.623a.638.638 0 00.175.53l1.27 1.54v.204H5.862v-.203l1.27-1.54a.615.615 0 00.163-.531V9.02z"
      fill="#fff"
    />
  </svg>
);

IconMedium.defaultProps = {
  ...iconDefaultProps,
};

export default IconMedium;
