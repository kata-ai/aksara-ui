import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconIdeaBrain: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M10.015 20a2.001 2.001 0 001.996 2 1.994 1.994 0 001.996-2v-.999h-3.992v1zM18.997 10.004a4.626 4.626 0 00-.37-2 3.72 3.72 0 000-.469 3.824 3.824 0 00-2.205-3.529 2.74 2.74 0 00-1.836-1.887 2.73 2.73 0 00-2.575.538 2.741 2.741 0 00-1.766-.65 2.771 2.771 0 00-2.645 2 3.834 3.834 0 00-2.225 3.478c-.01.15-.01.3 0 .45a3.744 3.744 0 00-.35 2.07v.11a7.002 7.002 0 002.306 4.578 8.425 8.425 0 011.776 2.309h5.808a8.296 8.296 0 011.746-2.27 7.002 7.002 0 002.335-4.728zm-5.988-5.228a.77.77 0 01.763-.682.767.767 0 01.764.682 1 1 0 00.748 1 1.806 1.806 0 011.307 2.199 1.102 1.102 0 00.22.89c.036.062.063.13.08.2h-3.882v-4.29zM7.21 8.775a1 1 0 00.22-.89 1.782 1.782 0 01-.06-.44 1.831 1.831 0 011.367-1.73.998.998 0 00.748-1 .77.77 0 011.054-.653.758.758 0 01.473.714v4.228H7.101a.68.68 0 01.11-.19v-.04z"
      fill={fill}
    />
  </svg>
);

IconIdeaBrain.defaultProps = {
  ...iconDefaultProps,
};

export default IconIdeaBrain;
