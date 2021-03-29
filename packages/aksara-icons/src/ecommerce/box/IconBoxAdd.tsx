import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBoxAdd: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3.9 18h5.45a6 6 0 108.55-7.25V4a2 2 0 00-2-2h-4.22v5.5a.45.45 0 01-.65.4l-.93-.47a.47.47 0 00-.4 0l-.93.47a.45.45 0 01-.65-.4V2H3.9a2 2 0 00-2 2v12a2 2 0 002 2zM19 16a4 4 0 11-8 0 4 4 0 018 0z"
      fill={fill}
    />
    <path d="M17 15h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2z" fill={fill} />
  </svg>
);

IconBoxAdd.defaultProps = {
  ...iconDefaultProps,
};

export default IconBoxAdd;
