import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconFlow: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.4 10.6l-1.1-1.1-.3-.3V8c0-1.7-1.3-3-3-3h-2.2c-.4-1.2-1.5-2-2.8-2H6C4.3 3 3 4.3 3 6s1.3 3 3 3h1v4H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c.7 0 1.4-.4 1.7-1H16c1.7 0 3-1.3 3-3v-2.2l.3-.3 1.1-1.1c.8-.8.8-2 0-2.8zM16 18h-4v-3c0-1.1-.9-2-2-2H9V9h2c1.3 0 2.4-.8 2.8-2H16c.6 0 1 .4 1 1v1.2c-.2.1-.3.2-.5.3l-1.1 1.1c-.8.8-.8 2 0 2.8l1.1 1.1c.1.1.3.3.5.3V17c0 .6-.4 1-1 1z"
      fill={fill}
    />
  </svg>
);

IconFlow.defaultProps = {
  ...iconDefaultProps,
};

export default IconFlow;
