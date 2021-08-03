import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPanelChat: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 18.996h4.982a1 1 0 010 2H5a2.002 2.002 0 01-2-2V5a2.002 2.002 0 012-2h10a2.002 2.002 0 012 2v5.01a1 1 0 11-2 0V7.004H5v11.993z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.999 13.002H17a4 4 0 11-2.2 7.337l-1.538.491.498-1.485A3.996 3.996 0 0117 13.002zM16 18h2a1 1 0 100-2h-2a1 1 0 000 2z"
      fill={fill}
    />
  </svg>
);

IconPanelChat.defaultProps = {
  ...iconDefaultProps,
};

export default IconPanelChat;
