import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconTrash: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.1 5H20c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1h3.1l.7-1.5c.2-.3.5-.5.9-.5h6.7c.4 0 .8.2 1 .6l.7 1.4zM8.8 21c-1 0-1.8-.7-2-1.7L5.2 9h13.7l-1.5 10.3c-.2 1-1 1.7-2 1.7H8.8z"
      fill={fill}
    />
  </svg>
);

IconTrash.defaultProps = {
  ...iconDefaultProps,
};

export default IconTrash;
