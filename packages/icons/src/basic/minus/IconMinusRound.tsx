import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMinusRound: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4 11H8a1 1 0 010-2h8a1 1 0 010 2z" fill={fill} />
  </svg>
);

IconMinusRound.defaultProps = {
  ...iconDefaultProps,
};

export default IconMinusRound;
