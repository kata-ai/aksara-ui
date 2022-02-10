import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '@aksara-ui/icons';

// eslint-disable-next-line import/prefer-default-export
export const LoveIcon: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.1299 2.35337C9.58054 1.80729 8.83713 1.50073 8.0622 1.50073C7.28727 1.50073 6.54387 1.80729 5.9945 2.35337C5.44544 1.80478 4.70077 1.49658 3.92429 1.49658C3.14782 1.49658 2.40314 1.80478 1.85409 2.35337C1.30504 2.90196 0.996582 3.64602 0.996582 4.42184C0.996582 5.19767 1.30504 5.94172 1.85409 6.49032L5.79971 10.4177C5.8519 10.4683 5.92177 10.4966 5.9945 10.4966C6.06722 10.4966 6.13709 10.4683 6.18928 10.4177L10.1349 6.49032C10.4084 6.21943 10.6253 5.89704 10.7732 5.5418C10.9211 5.18657 10.997 4.80555 10.9966 4.4208C10.9961 4.03606 10.9193 3.65522 10.7705 3.30035C10.6217 2.94547 10.404 2.6236 10.1299 2.35337Z"
      fill={fill}
    />
  </svg>
);
LoveIcon.defaultProps = {
  ...iconDefaultProps,
};
