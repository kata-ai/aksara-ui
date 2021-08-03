import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDocAdd: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.778 3.674a4 4 0 114.444 6.652 4 4 0 01-4.444-6.652zm3.232 4.32h.59a1 1 0 100-2h-.59V5.4a1 1 0 00-2 0v.593h-.61a1 1 0 100 2h.61V8.6a1 1 0 102 0v-.607zM10 11h2.541a5.947 5.947 0 006.46 1.65V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.909H3V10a1 1 0 012 0v8.091a1 1 0 102 0V7a2 2 0 012-2h2.35a5.888 5.888 0 000 4H10a1 1 0 000 2zm0 8h6a1 1 0 100-2h-6a1 1 0 000 2zm0-4h6a1 1 0 100-2h-6a1 1 0 000 2z"
      fill={fill}
    />
  </svg>
);

IconDocAdd.defaultProps = {
  ...iconDefaultProps,
};

export default IconDocAdd;
