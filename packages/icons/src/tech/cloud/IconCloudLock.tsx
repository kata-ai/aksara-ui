import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCloudLock: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.841 11.3v-.08a6.312 6.312 0 00-1.92-4.433A6.344 6.344 0 0012.426 5a6.386 6.386 0 00-3.914 1.295 6.36 6.36 0 00-2.3 3.415 4.675 4.675 0 00-3.06 1.64 4.653 4.653 0 00.416 6.417A4.678 4.678 0 006.812 19h11.227a3.895 3.895 0 002.688-.952 3.877 3.877 0 00.548-5.265 3.891 3.891 0 00-2.434-1.483zm-3.81 4.2a.5.5 0 01-.5.5H9.518a.502.502 0 01-.501-.5v-3a.5.5 0 01.501-.5h.502v-.5c0-.53.21-1.04.587-1.414a2.007 2.007 0 013.422 1.414v.5h.502a.502.502 0 01.5.5v3z"
      fill={fill}
    />
    <path
      d="M13 12v-.5a1 1 0 00-2 0v.5h2zM12 13a1 1 0 00-.85.5 1 1 0 00-.15.5 1 1 0 002 0 1 1 0 00-.15-.5A1 1 0 0012 13z"
      fill={fill}
    />
  </svg>
);

IconCloudLock.defaultProps = {
  ...iconDefaultProps,
};

export default IconCloudLock;
