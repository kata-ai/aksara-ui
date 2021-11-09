import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSecurity: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12.018 20.85a12.791 12.791 0 007.283-5.805 12.748 12.748 0 001.405-9.195.5.5 0 00-.341-.36l-8.197-2.61a.391.391 0 00-.3 0L3.67 5.49a.501.501 0 00-.34.36 12.748 12.748 0 001.405 9.195 12.79 12.79 0 007.282 5.805zM5.265 7.19a.4.4 0 01.26-.29l6.373-2a.492.492 0 01.24 0l6.373 2a.4.4 0 01.26.29 9.903 9.903 0 01-1.09 7.15 9.936 9.936 0 01-5.663 4.51 9.936 9.936 0 01-5.663-4.51 9.903 9.903 0 01-1.09-7.15z"
      fill={fill}
    />
    <path
      d="M12.018 16.85a7.112 7.112 0 004.045-3.224 7.088 7.088 0 00.785-5.106.27.27 0 00-.19-.2l-4.55-1.45a.281.281 0 00-.18 0l-4.55 1.45a.27.27 0 00-.19.2 7.088 7.088 0 00.785 5.106 7.112 7.112 0 004.045 3.224z"
      fill={fill}
    />
  </svg>
);

IconSecurity.defaultProps = {
  ...iconDefaultProps,
};

export default IconSecurity;
