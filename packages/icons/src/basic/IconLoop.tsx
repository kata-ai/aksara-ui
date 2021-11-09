import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconLoop: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.011 4H11.993A7.79 7.79 0 005.58 7.442a1 1 0 101.66 1.116A5.79 5.79 0 0111.998 6a5.92 5.92 0 015.443 3.781l-.438-.314a1 1 0 10-1.165 1.626l2.4 1.72a1 1 0 00.593.187 1 1 0 00.924-.596l1.57-2.3a1 1 0 10-1.65-1.128l-.26.38a7.91 7.91 0 00-1.83-2.972A7.92 7.92 0 0012.011 4zm-7.766 7.597A1 1 0 015.17 11a1 1 0 01.593.187l2.4 1.72a1 1 0 01-1.165 1.626l-.439-.314.025.063A5.92 5.92 0 0012.005 18a5.81 5.81 0 004.806-2.56 1 1 0 011.658 1.12A7.81 7.81 0 0112 20h-.012a7.919 7.919 0 01-7.403-5.356l-.26.38a1 1 0 11-1.652-1.128l1.57-2.3z"
      fill={fill}
    />
  </svg>
);

IconLoop.defaultProps = {
  ...iconDefaultProps,
};

export default IconLoop;
