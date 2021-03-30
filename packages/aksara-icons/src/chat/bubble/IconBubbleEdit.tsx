import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBubbleEdit: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.081 3c.24 0 .47.095.638.264l1.032 1.031a.9.9 0 010 1.274l-5.234 5.22a.462.462 0 01-.327.135h-1.654a.462.462 0 01-.462-.461V8.81a.46.46 0 01.136-.326l5.233-5.22c.17-.17.399-.264.638-.264zm-5.545 9.938h1.654a2.467 2.467 0 001.754-.724l2.917-2.91c.085.267.153.538.203.814l.008-.001.004.035.014.117.02.17v.004l.006.045a6.933 6.933 0 01-1.437 4.996 19.393 19.393 0 01-3.866 3.45A28.662 28.662 0 0112.6 20.44l-.046.028a2.958 2.958 0 01-1.345.531.807.807 0 01-.81-.762 2.685 2.685 0 01.091-1.1.452.452 0 00-.088-.404.442.442 0 00-.264-.152 11.969 11.969 0 01-2.389-.659 8.185 8.185 0 01-3.21-2.41 7.03 7.03 0 01-1.516-3.773 7.145 7.145 0 013.962-6.723 9.605 9.605 0 014.585-1.138c1 .001 1.995.153 2.95.452l-2.736 2.728a2.457 2.457 0 00-.727 1.75v1.654a2.479 2.479 0 002.48 2.475z"
      fill={fill}
    />
  </svg>
);

IconBubbleEdit.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubbleEdit;