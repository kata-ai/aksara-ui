import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCoinDollar2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18.571a8.572 8.572 0 110-17.143 8.572 8.572 0 010 17.143z"
      fill={fill}
    />
    <path
      d="M12.714 14.143a.714.714 0 000-1.429v1.429zM10.571 10.571a.715.715 0 00.715.715V9.857a.714.714 0 00-.715.714z"
      fill={fill}
    />
    <path
      d="M12 4.857a7.143 7.143 0 100 14.286 7.143 7.143 0 000-14.286zm2.857 8.572a2.143 2.143 0 01-2.143 2.142.715.715 0 01-1.428 0H9.857a.714.714 0 110-1.428h1.429v-1.429a2.143 2.143 0 010-4.285.715.715 0 011.428 0h1.429a.714.714 0 010 1.428h-1.429v1.429a2.143 2.143 0 012.143 2.143z"
      fill={fill}
    />
  </svg>
);

IconCoinDollar2.defaultProps = {
  ...iconDefaultProps,
};

export default IconCoinDollar2;
