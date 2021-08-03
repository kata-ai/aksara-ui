import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconKebabHorizontal: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M22 11.51v-.02A2.49 2.49 0 0019.51 9h-.02A2.49 2.49 0 0017 11.49v.02A2.49 2.49 0 0019.49 14h.02A2.49 2.49 0 0022 11.51zM14.5 11.51v-.02A2.49 2.49 0 0012.01 9h-.02a2.49 2.49 0 00-2.49 2.49v.02A2.49 2.49 0 0011.99 14h.02a2.49 2.49 0 002.49-2.49zM7 11.49v.02A2.49 2.49 0 014.51 14h-.02A2.49 2.49 0 012 11.51v-.02A2.49 2.49 0 014.49 9h.02A2.49 2.49 0 017 11.49z"
      fill={fill}
    />
  </svg>
);

IconKebabHorizontal.defaultProps = {
  ...iconDefaultProps,
};

export default IconKebabHorizontal;
