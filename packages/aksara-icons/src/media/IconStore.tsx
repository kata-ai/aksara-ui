import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconStore: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 4.3L21 8V9V10.7C20.7 10.9 20.4 11 20 11C18.9 11 18 10.1 18 9C18 10.1 17.1 11 16 11C15 11 14.1 10.3 14 9.3C13.8 10.3 13 11 12 11C11 11 10.1 10.3 10 9.3C9.8 10.3 9 11 8 11C6.9 11 6 10.1 6 9C6 10.1 5.1 11 4 11C3.6 11 3.3 10.9 3 10.7V9V8L4.5 4.3C4.8 3.5 5.5 3 6.4 3H17.6C18.5 3 19.2 3.5 19.5 4.3ZM18 14C18 13.4 18.4 13 19 13C19.6 13 20 13.4 20 14V19C20 20.1 19.1 21 18 21H6C4.9 21 4 20.1 4 19V14C4 13.4 4.4 13 5 13C5.6 13 6 13.4 6 14V17H18V14Z"
      fill={fill}
    />
  </svg>
);

IconStore.defaultProps = {
  ...iconDefaultProps,
};

export default IconStore;
