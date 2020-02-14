import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTextArea: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.9 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h15.9c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 5h-2v6c0 .6-.4 1-1 1s-1-.4-1-1v-6h-2c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zm8 7h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zm0-4h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1z"
      fill={fill}
    />
  </svg>
);

IconTextArea.defaultProps = {
  ...iconDefaultProps,
};

export default IconTextArea;
