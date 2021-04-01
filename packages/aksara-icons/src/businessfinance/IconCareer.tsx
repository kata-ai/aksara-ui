import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCareer: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 11h-2V9h3c.7 0 1.2-.7.9-1.3l-.5-1.4c-.1-.2-.1-.4 0-.6l.5-1.4c.3-.6-.2-1.3-.9-1.3h-4c-.6 0-1 .4-1 1v9.7h-4c-1.1 0-2 .9-2 2v.7H5c-1.1 0-2 .9-2 2v.6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2z"
      fill={fill}
    />
  </svg>
);

IconCareer.defaultProps = {
  ...iconDefaultProps,
};

export default IconCareer;
