import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMessageTemplate: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 10.222a5.265 5.265 0 00-2.312-.534A5.246 5.246 0 0012.8 17H7.653a2 2 0 00-1.414.586l-.825.824A2 2 0 012.002 17H2V7a2 2 0 012-2h14a2 2 0 012 2v3.222zm1.82 4.197a.369.369 0 01.132.234c.064.397.064.802 0 1.2a.369.369 0 01-.386.316 1.085 1.085 0 00-.988 1.715.369.369 0 01-.086.495 3.988 3.988 0 01-1.03.594.37.37 0 01-.473-.173 1.085 1.085 0 00-1.978 0 .37.37 0 01-.473.173 3.988 3.988 0 01-1.03-.594.37.37 0 01-.086-.495 1.086 1.086 0 00-.988-1.715.37.37 0 01-.386-.317 3.784 3.784 0 010-1.2.368.368 0 01.386-.316 1.085 1.085 0 00.988-1.715.37.37 0 01.086-.495 3.988 3.988 0 011.03-.593.37.37 0 01.473.172 1.086 1.086 0 001.978 0 .37.37 0 01.473-.172c.371.145.718.345 1.03.593a.37.37 0 01.086.495 1.085 1.085 0 00.988 1.715.369.369 0 01.255.083zm-4.262 1.494a.795.795 0 10.883-1.321.795.795 0 00-.883 1.321z"
      fill={fill}
    />
  </svg>
);

IconMessageTemplate.defaultProps = {
  ...iconDefaultProps,
};

export default IconMessageTemplate;
