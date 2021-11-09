import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconChartGraph: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 3c.6 0 1 .4 1 1v13h-4V4c0-.6.4-1 1-1h2zm7 5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v9h4V8zM7 12c.6 0 1 .4 1 1v4H4v-4c0-.6.4-1 1-1h2zm-3 7h16c.5 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1z"
      fill={fill}
    />
  </svg>
);

IconChartGraph.defaultProps = {
  ...iconDefaultProps,
};

export default IconChartGraph;
