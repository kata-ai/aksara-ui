import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconHeartCross: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17.523 4.294c-1.9-.702-3.999-.1-5.498 1.302-1.6-1.603-4.099-2.104-6.098-1.002-3.4 1.804-3.8 6.213-1.4 8.718l5.798 6.012c.9.901 2.4.901 3.3 0l5.798-6.012c2.599-2.605 2-7.315-1.9-9.018zm-2.499 8.717h-2v2.004c0 .601-.4 1.002-1 1.002-.599 0-.999-.4-.999-1.002v-2.004h-2c-.6 0-.999-.4-.999-1.002 0-.601.4-1.002 1-1.002h2V9.003c0-.601.399-1.002.999-1.002s1 .401 1 1.002v2.004h1.999c.6 0 1 .401 1 1.002s-.4 1.002-1 1.002z"
      fill={fill}
    />
  </svg>
);

IconHeartCross.defaultProps = {
  ...iconDefaultProps,
};

export default IconHeartCross;
