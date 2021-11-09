import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconData: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 8a3 3 0 11-6 0 3 3 0 016 0zm0 8a3 3 0 11-6 0 3 3 0 016 0zm11.9 0a3 3 0 11-6 0 3 3 0 016 0zm-9-3c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zm6-2a3 3 0 100-6 3 3 0 000 6zm-7-5c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1s-1-.4-1-1V6z"
      fill={fill}
    />
  </svg>
);

IconData.defaultProps = {
  ...iconDefaultProps,
};

export default IconData;
