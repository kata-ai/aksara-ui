import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconWaba: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9c-1.8 0-3.5-.5-4.9-1.5l-3.5 1.1 1.1-3.3C3.6 15.8 3 14 3 12zm11.8 0c.4-.5.6-1.1.6-1.7v-.6c0-1.5-1.2-2.7-2.7-2.7H9.6c-.6 0-1 .4-1 1v8.1c0 .6.4 1 1 1h3.1c1.5 0 2.7-1.2 2.7-2.7v-.7c0-.7-.2-1.2-.6-1.7zm-2.1-3h-2.1v2h2.1c.4 0 .7-.3.7-.7v-.6c0-.4-.3-.7-.7-.7zm0 4h-2.1v2h2.1c.4 0 .7-.3.7-.7v-.7c0-.3-.3-.6-.7-.6z"
      fill={fill}
    />
  </svg>
);

IconWaba.defaultProps = {
  ...iconDefaultProps,
};

export default IconWaba;
