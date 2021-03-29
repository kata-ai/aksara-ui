import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBubble6: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.989 3a8.981 8.981 0 00-8.223 5.316A9.01 9.01 0 005.267 18L3.27 19.77A.75.75 0 003.749 21h8.24c2.384 0 4.67-.948 6.356-2.636a9.005 9.005 0 000-12.728A8.984 8.984 0 0011.99 3zM7.994 13a.998.998 0 01-.98-1.195 1 1 0 011.362-.729A.999.999 0 017.994 13zm3.995 0a.997.997 0 01-.98-1.195 1 1 0 011.362-.729.999.999 0 01.324 1.631.998.998 0 01-.706.293zm3.995 0a.998.998 0 01-.98-1.195 1 1 0 011.362-.729A1 1 0 0115.984 13z"
      fill={fill}
    />
  </svg>
);

IconBubble6.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubble6;
