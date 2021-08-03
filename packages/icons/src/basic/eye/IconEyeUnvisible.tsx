import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconEyeUnvisible: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.96 5.002c4.269 0 8.037 2.5 9.826 6.1.3.6.3 1.2-.1 1.8-.79 1.59-1.949 2.97-3.358 4.01l1.38 1.39c.389.39.389 1.02 0 1.41-.2.19-.45.29-.71.29-.26 0-.51-.1-.71-.31L4.304 5.702a.996.996 0 111.41-1.41l1.709 1.72c1.379-.65 2.908-1.01 4.538-1.01zm0 2c-1.019 0-1.959.3-2.738.81l6.917 6.91c.5-.78.79-1.71.79-2.72 0-2.8-2.19-5-4.968-5z"
      fill={fill}
    />
    <path
      d="M6.993 12.002c0 2.8 2.189 5 4.968 5 .25 0 .49-.04.72-.07l1.769 1.77c-.8.19-1.64.3-2.5.3-4.268 0-7.936-2.5-9.725-6-.3-.6-.3-1.3 0-1.9.5-1 1.15-1.92 1.92-2.72l2.918 2.92-.018.134c-.026.186-.052.373-.052.566z"
      fill={fill}
    />
  </svg>
);

IconEyeUnvisible.defaultProps = {
  ...iconDefaultProps,
};

export default IconEyeUnvisible;
