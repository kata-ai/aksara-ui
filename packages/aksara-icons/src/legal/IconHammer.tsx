import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconHammer: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M13 19H4a1 1 0 000 2h9a1 1 0 000-2zM12.82 4.71L17.06 9a1 1 0 001.42-1.41l-4.24-4.3a1 1 0 10-1.41 1.42h-.01zM10 16a1 1 0 001.41 0 1 1 0 000-1.41l-4.24-4.23a1 1 0 10-1.41 1.42L10 16zM20.48 16.14l-1.13-.87a15.885 15.885 0 01-1.63-1.43L15 11.07l1.41-1.41-4.29-4.24-4.24 4.24 4.24 4.24 1.42-1.41 2.78 2.78c.501.501.972 1.032 1.41 1.59l.89 1.14a1.331 1.331 0 002.38-.903 1.33 1.33 0 00-.52-.967v.01z"
      fill={fill}
    />
  </svg>
);

IconHammer.defaultProps = {
  ...iconDefaultProps,
};

export default IconHammer;
