import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconTextData: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 7c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm0 5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm19-4H8c-.6 0-1-.4-1-1s.4-1 1-1h13c.6 0 1 .4 1 1s-.4 1-1 1zM8 13h13c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1s.4 1 1 1zm-4 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4-1h13c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1s.4 1 1 1z"
      fill={fill}
    />
  </svg>
);

IconTextData.defaultProps = {
  ...iconDefaultProps,
};

export default IconTextData;
