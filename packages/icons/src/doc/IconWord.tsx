import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconWord: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.898 13.586l2.959 5.91a.995.995 0 01-.44 1.345.999.999 0 01-.449.1 1 1 0 01-.888-.549l-2.725-5.432H7.611l-2.725 5.432a.998.998 0 11-1.776-.897l2.96-5.91a.995.995 0 100-.001.998.998 0 01.066-.131l4.959-9.905a.997.997 0 011.776 0l4.96 9.905c.025.042.048.087.067.133zm-.924-.619h-1.617l-3.374-6.738-3.374 6.738H6.992h9.982z"
      fill={fill}
    />
  </svg>
);

IconWord.defaultProps = {
  ...iconDefaultProps,
};

export default IconWord;
