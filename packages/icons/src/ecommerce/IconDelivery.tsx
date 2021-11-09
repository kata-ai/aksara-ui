import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDelivery: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21.49 11.34l-2-2.46a2.29 2.29 0 00-1.8-.88H15V6a1 1 0 00-1-1H3a1 1 0 00-1 1v10a1 1 0 001 1 2.5 2.5 0 005 0h7.1a2.5 2.5 0 004.9 0h1a1 1 0 001-1v-3.2a2.36 2.36 0 00-.51-1.46zM16 10h1.69a.33.33 0 01.26.13l2 2.46a.4.4 0 01.07.21V14H16v-4zM5.5 17a.5.5 0 110-1 .5.5 0 010 1zm12 0a.5.5 0 110-1 .5.5 0 010 1z"
      fill={fill}
    />
  </svg>
);

IconDelivery.defaultProps = {
  ...iconDefaultProps,
};

export default IconDelivery;
