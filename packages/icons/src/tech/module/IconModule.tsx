import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconModule: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.978 6.32l-6.984-4.052a1.978 1.978 0 00-1.988 0L3.936 6.37l7.967 5.184 8.075-5.233zM13 13.249V22l6.994-4.058A2.03 2.03 0 0021 16.183V8.064l-8 5.184zM3 8.17l7.823 5.09c.058.03.117.057.177.08V22l-6.994-4.057A2.031 2.031 0 013 16.183V8.17z"
      fill={fill}
    />
  </svg>
);

IconModule.defaultProps = {
  ...iconDefaultProps,
};

export default IconModule;
