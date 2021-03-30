import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconKeynoteGraph: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.25 3H3.75a.75.75 0 00-.75.75V6a.75.75 0 00.75.75h16.5A.75.75 0 0021 6V3.75a.75.75 0 00-.75-.75zM3.75 8.25v8.25a1.5 1.5 0 001.5 1.5h5.25l-1.35 1.8a.75.75 0 001.2.9L12 18.503l1.65 2.197a.75.75 0 001.2-.9L13.5 18h5.25a1.5 1.5 0 001.5-1.5V8.25H3.75zm5.25 6a.75.75 0 11-1.5 0v-1.5a.75.75 0 111.5 0v1.5zm3.75 0a.75.75 0 11-1.5 0v-3a.75.75 0 111.5 0v3zm3.75 0a.75.75 0 11-1.5 0v-4.5a.75.75 0 111.5 0v4.5z"
      fill={fill}
    />
  </svg>
);

IconKeynoteGraph.defaultProps = {
  ...iconDefaultProps,
};

export default IconKeynoteGraph;
