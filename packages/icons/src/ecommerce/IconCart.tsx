import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCart: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M10.494 21a1.5 1.5 0 10-.002-2.999A1.5 1.5 0 0010.494 21zM15.49 21a1.5 1.5 0 10-.002-2.999A1.5 1.5 0 0015.49 21zM19.986 5H7.196c-.5-1.2-1.598-2-2.897-2h-.3C3.4 3 3 3.4 3 4s.4 1 1 1h.299c.5 0 .9.3 1 .8l1.398 7.7c.3 1.5 1.499 2.5 2.997 2.5h8.293c.6 0 1-.4 1-1s-.4-1-1-1H9.694c-.5 0-.899-.3-.999-.8l-.2-1.2h9.293c.899 0 1.698-.6 1.898-1.5l1.299-4.2c.1-.7-.3-1.3-1-1.3z"
      fill={fill}
    />
  </svg>
);

IconCart.defaultProps = {
  ...iconDefaultProps,
};

export default IconCart;
