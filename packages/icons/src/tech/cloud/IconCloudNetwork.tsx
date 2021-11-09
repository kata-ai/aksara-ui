import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCloudNetwork: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.12 8.405v-.07a5.567 5.567 0 00-1.78-3.858c-1.079-1-2.51-1.531-3.98-1.477a5.686 5.686 0 00-5.58 4.004A4.128 4.128 0 003 11.008a4.176 4.176 0 004.32 4.003H11v-5.004a1.002 1.002 0 011.707-.708c.188.187.293.442.293.708v5.004h4.4a3.468 3.468 0 003.6-3.333 3.415 3.415 0 00-2.88-3.273z"
      fill={fill}
    />
    <path
      d="M20 18.014h-6.28c-.17-.301-.42-.55-.72-.72V15.01h-2v2.282c-.3.17-.55.42-.72.721H4a1 1 0 00-.707 1.709 1 1 0 00.707.293h6.28a2.002 2.002 0 002.71.718c.301-.172.553-.42.73-.718H20a1 1 0 00.707-1.709 1 1 0 00-.707-.293z"
      fill={fill}
    />
  </svg>
);

IconCloudNetwork.defaultProps = {
  ...iconDefaultProps,
};

export default IconCloudNetwork;
