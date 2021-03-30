import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconHandCoins: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15.307 4a6.6 6.6 0 00-5.217 2.56l-.19.08a4.92 4.92 0 00-2.653 2.11l-2.693 4.36H2V19h6.065a4.769 4.769 0 002.643-.74c.333-.228.62-.517.848-.85.17-.25.37-.51.599-.79a6.59 6.59 0 003.152.8 6.685 6.685 0 004.733-1.965 6.719 6.719 0 000-9.49A6.685 6.685 0 0015.307 4zm0 11.42a4.49 4.49 0 01-1.766-.36c.44-.46.898-.92 1.317-1.34a1.27 1.27 0 00-.09-1.88 1.255 1.255 0 00-1.616 0l-1.805 1.29a4.65 4.65 0 01.674-5.618 4.624 4.624 0 017.57 1.446 4.65 4.65 0 01-1.434 5.473 4.62 4.62 0 01-2.82.969l-.03.02z"
      fill={fill}
    />
  </svg>
);

IconHandCoins.defaultProps = {
  ...iconDefaultProps,
};

export default IconHandCoins;
