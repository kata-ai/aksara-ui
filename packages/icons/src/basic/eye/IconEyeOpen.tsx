import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconEyeOpen: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21.788 11.1C20 7.5 16.226 5 11.956 5c-4.27 0-7.945 2.5-9.733 6.1-.297.6-.297 1.3 0 1.9 1.788 3.5 5.463 6 9.733 6 4.27 0 7.945-2.5 9.732-6.1.398-.6.398-1.2.1-1.8zM11.956 17c-2.78 0-4.966-2.2-4.966-5s2.185-5 4.966-5c2.78 0 4.965 2.2 4.965 5s-2.184 5-4.965 5z"
      fill={fill}
    />
  </svg>
);

IconEyeOpen.defaultProps = {
  ...iconDefaultProps,
};

export default IconEyeOpen;
