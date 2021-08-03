import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPHP: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M7.24 10.56h-.62v1.35h.6a.61.61 0 00.64-.69.59.59 0 00-.62-.66z" fill={fill} />
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7.47 13h-.85v1.16a.34.34 0 01-.38.38h-.45a.35.35 0 01-.39-.38V9.89a.35.35 0 01.39-.38h1.68a1.59 1.59 0 011.62 1.71A1.6 1.6 0 017.47 13zm6.47 1.16a.34.34 0 01-.38.38h-.45a.35.35 0 01-.39-.38v-1.62h-1.81v1.57a.34.34 0 01-.38.38h-.45a.34.34 0 01-.38-.38V9.89a.34.34 0 01.38-.38h.45a.34.34 0 01.38.38v1.61h1.81V9.89a.351.351 0 01.39-.38h.45a.34.34 0 01.38.38v4.27zM17 13h-.85v1.16a.34.34 0 01-.38.38h-.45a.34.34 0 01-.38-.38V9.89a.34.34 0 01.38-.38H17a1.6 1.6 0 011.63 1.71A1.61 1.61 0 0117 13z"
      fill={fill}
    />
    <path d="M16.74 10.56h-.62v1.35h.6a.61.61 0 00.64-.69.59.59 0 00-.62-.66z" fill={fill} />
  </svg>
);

IconPHP.defaultProps = {
  ...iconDefaultProps,
};

export default IconPHP;
