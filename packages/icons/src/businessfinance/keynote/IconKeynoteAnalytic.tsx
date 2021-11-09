import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconKeynoteAnalytic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.25 3H3.75a.75.75 0 00-.75.75V6a.75.75 0 00.75.75h16.5A.75.75 0 0021 6V3.75a.75.75 0 00-.75-.75zM3.75 8.25v8.25a1.5 1.5 0 001.5 1.5h5.25l-1.35 1.8a.75.75 0 001.2.9L12 18.503l1.65 2.197a.75.75 0 001.2-.9L13.5 18h5.25a1.5 1.5 0 001.5-1.5V8.25H3.75zm3.218 5.467l2.25-2.25a.75.75 0 01.87-.135l1.012.503 1.117-1.118a.75.75 0 01.87-.135l1.013.503 1.867-1.868a.753.753 0 111.065 1.066l-2.25 2.25a.75.75 0 01-.87.135l-1.012-.503-1.117 1.118a.75.75 0 01-.87.135L9.9 12.915l-1.867 1.868a.75.75 0 01-1.23-.245.75.75 0 01.165-.82z"
      fill={fill}
    />
  </svg>
);

IconKeynoteAnalytic.defaultProps = {
  ...iconDefaultProps,
};

export default IconKeynoteAnalytic;
