import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSave: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.7 6.7l-3.4-3.4c-.2-.2-.4-.3-.7-.3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.4c0-.3-.1-.5-.3-.7zM6 5h6c.6 0 1 .4 1 1s-.4 1-1 1H6c-.6 0-1-.4-1-1s.4-1 1-1zm13 13c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v7z"
      fill={fill}
    />
  </svg>
);

IconSave.defaultProps = {
  ...iconDefaultProps,
};

export default IconSave;
