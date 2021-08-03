import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCoinEuro: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm.61 7.82a.75.75 0 110 1.5h-3c-.08.45-.08.91 0 1.36h3a.75.75 0 110 1.5h-2.25a3.52 3.52 0 002.76 1.36 3.63 3.63 0 001.52-.34.75.75 0 11.64 1.35 4.999 4.999 0 01-6.68-2.37h-1a.75.75 0 110-1.5h.54a5.202 5.202 0 01-.05-.68c.005-.228.025-.455.06-.68h-.54a.75.75 0 110-1.5h1a5 5 0 016.68-2.37.75.75 0 11-.64 1.35 3.63 3.63 0 00-1.52-.34 3.52 3.52 0 00-2.76 1.36h2.24z"
      fill={fill}
    />
  </svg>
);

IconCoinEuro.defaultProps = {
  ...iconDefaultProps,
};

export default IconCoinEuro;
