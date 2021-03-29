import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserNext: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.25 12H9a6 6 0 00-6 6v.75A2.25 2.25 0 005.25 21H15a2.25 2.25 0 002.25-2.25V18a6 6 0 00-6-6zM10.125 10.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM19.758 6.406l-1.666-1.664a.837.837 0 00-1.429.59c0 .222.088.434.245.591l.25.241h-1.325a.834.834 0 00-.833.832.831.831 0 00.833.832h1.325l-.25.241a.832.832 0 00.271 1.364.835.835 0 00.913-.182l1.666-1.664a.83.83 0 00.175-.275.83.83 0 00.067-.316.83.83 0 00-.067-.316.772.772 0 00-.175-.274z"
      fill={fill}
    />
  </svg>
);

IconUserNext.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserNext;
