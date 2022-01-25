import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '@aksara-ui/icons';

// eslint-disable-next-line import/prefer-default-export
export const CheckboxIndeterminateIcon: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="0.000244141" y="6.10352e-05" width="8" height="2" rx="1" fill={fill} />
  </svg>
);
CheckboxIndeterminateIcon.defaultProps = {
  ...iconDefaultProps,
};
