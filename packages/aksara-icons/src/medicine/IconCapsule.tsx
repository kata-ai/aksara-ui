import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCapsule: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M14.723 3a6.272 6.272 0 00-4.445 1.84L7.575 7.55l-2.733 2.72a6.296 6.296 0 000 8.89 6.31 6.31 0 008.9 0l1.602-1.6 3.834-3.84A6.287 6.287 0 0014.723 3zm3.003 9.32l-2.412 2.42-6.037-6.06 2.413-2.42a4.294 4.294 0 014.774-1.098 4.295 4.295 0 012.698 4.085 4.286 4.286 0 01-1.406 3.073h-.03z"
      fill={fill}
    />
  </svg>
);

IconCapsule.defaultProps = {
  ...iconDefaultProps,
};

export default IconCapsule;
