import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconArrowDownRounded: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 22a10 10 0 100-20 10 10 0 000 20zM7.29 11.3a1 1 0 011.42 0L11 13.59V8a1 1 0 012 0v5.58l2.29-2.29a1.004 1.004 0 111.42 1.42l-4 4a1.11 1.11 0 01-.34.22.879.879 0 01-.28.06L12 17a1.09 1.09 0 01-.39-.08h-.06a1.45 1.45 0 01-.26-.17l-4-4a1 1 0 010-1.45zM12 17zM12.38 16.92z"
      fill={fill}
    />
  </svg>
);

IconArrowDownRounded.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowDownRounded;
