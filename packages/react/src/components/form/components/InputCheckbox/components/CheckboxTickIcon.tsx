import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '@aksara-ui/icons';

// eslint-disable-next-line import/prefer-default-export
export const ChekcboxTickIcon: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 8 6" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.70693 0.293116C7.31595 -0.097868 6.68397 -0.097868 6.29299 0.293116L3.00012 3.58598L1.70718 2.29303C1.3162 1.90205 0.684222 1.90205 0.293238 2.29303C-0.0977459 2.68402 -0.0977459 3.31599 0.293238 3.70697L2.29315 5.70689C2.48815 5.90188 2.74414 5.99988 3.00012 5.99988C3.25611 5.99988 3.5121 5.90188 3.7071 5.70689L7.70693 1.70706C8.09791 1.31607 8.09791 0.684099 7.70693 0.293116Z"
      fill={fill}
    />
  </svg>
);
ChekcboxTickIcon.defaultProps = {
  ...iconDefaultProps,
};
