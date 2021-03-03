import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconNLUTrait: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H4a2 2 0 00-2 2v10h.002a1.999 1.999 0 003.412 1.41l.825-.824A2 2 0 017.653 17H20a2 2 0 002-2V7a2 2 0 00-2-2zm-1.5 6.01a.98.98 0 01-.062.309c-.008.023-.005.049-.014.072a.994.994 0 01-.23.336l-1.985 1.981a1.002 1.002 0 01-1.634-.324 1 1 0 01.222-1.092l.282-.281H8.92l.282.281a1 1 0 01-1.414 1.416l-1.986-1.983a.995.995 0 01-.226-.335 1.013 1.013 0 01-.021-.103.97.97 0 01-.056-.276v-.004a.998.998 0 01.294-.708l2.01-2.007a1 1 0 011.413 1.416l-.304.303h6.173l-.303-.303a1 1 0 011.412-1.416l2.011 2.007a.998.998 0 01.294.708v.004z"
      fill={fill}
    />
  </svg>
);

IconNLUTrait.defaultProps = {
  ...iconDefaultProps,
};

export default IconNLUTrait;
