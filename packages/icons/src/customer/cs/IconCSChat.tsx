import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCSChat: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.991 9.985a7.979 7.979 0 00-2.342-5.646 8.002 8.002 0 00-11.308 0 7.98 7.98 0 00-2.342 5.646A2.19 2.19 0 002 12.31v2.336a2.184 2.184 0 001.999 2.325h1a1.09 1.09 0 00.999-1.167v-5.33c0-1.588.632-3.112 1.756-4.235a6.001 6.001 0 018.481 0 5.984 5.984 0 011.757 4.235v5.32a1.086 1.086 0 001 1.177h.999a2.19 2.19 0 001.999-2.325V12.31a2.184 2.184 0 00-1.999-2.325z"
      fill={fill}
    />
    <path
      d="M16.383 18.21a4.906 4.906 0 00.61-2.237 4.985 4.985 0 00-3.085-4.61 5.005 5.005 0 00-5.447 1.082 4.989 4.989 0 003.534 8.519 4.854 4.854 0 002.279-.58v.05l2.309.56a.41.41 0 00.47-.5l-.55-2.295-.12.01z"
      fill={fill}
    />
  </svg>
);

IconCSChat.defaultProps = {
  ...iconDefaultProps,
};

export default IconCSChat;
