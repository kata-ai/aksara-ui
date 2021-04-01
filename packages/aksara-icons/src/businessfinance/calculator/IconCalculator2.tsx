import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCalculator2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 3H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zm-.94 4.81h-.25v.25a.75.75 0 01-1.5 0v-.25h-.25a.75.75 0 010-1.5h.25v-.25a.75.75 0 011.5 0v.25h.25a.75.75 0 010 1.5zM9 13H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zm-.41 4.41a.74.74 0 010 1.06.77.77 0 01-.53.22.79.79 0 01-.53-.22L7.06 18l-.47.47a.77.77 0 01-.53.22.79.79 0 01-.53-.22.75.75 0 010-1.06l.47-.47-.47-.47a.75.75 0 010-1.06.74.74 0 011.06 0l.47.47.47-.47a.75.75 0 111.06 1.06l-.47.47.47.47zM19 3h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zm-1 4.75h-2a.75.75 0 110-1.5h2a.75.75 0 110 1.5zM19 13h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zm-1 5.75h-2a.75.75 0 110-1.5h2a.75.75 0 110 1.5zm0-2h-2a.75.75 0 110-1.5h2a.75.75 0 110 1.5z"
      fill={fill}
    />
  </svg>
);

IconCalculator2.defaultProps = {
  ...iconDefaultProps,
};

export default IconCalculator2;
