import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconFacebook: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.0064 3H3.99272C3.4444 3.00033 2.99989 3.44506 3 3.9936V20.0073C3.00033 20.5556 3.44506 21.0001 3.9936 21H12.6152V14.0391H10.2773V11.3145H12.6152V9.30934C12.6152 6.98408 14.0348 5.71846 16.109 5.71846C17.1025 5.71846 17.9562 5.7925 18.2051 5.82557V8.25586H16.7748C15.6463 8.25586 15.4277 8.7921 15.4277 9.57916V11.3145H18.126L17.7744 14.0391H15.4277V21H20.0064C20.5551 21.0001 20.9999 20.5555 21 20.0068C21 20.0067 21 20.0066 21 20.0064V3.99272C20.9998 3.4444 20.5549 2.99989 20.0064 3Z"
      fill={fill}
    />
  </svg>
);

IconFacebook.defaultProps = {
  ...iconDefaultProps,
};

export default IconFacebook;
