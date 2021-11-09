import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconTurbo: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.872 3.467c.246.246.421.555.506.893a9.896 9.896 0 01-3.24 9.97 11.514 11.514 0 01-2.2 5.917.962.962 0 01-1.721-.276l-1.005-3.442a1.946 1.946 0 01-1.652-.55l-3.201-3.2a1.946 1.946 0 01-.55-1.653l-3.443-1.005A.964.964 0 013.09 8.4 11.513 11.513 0 019.01 6.199V6.2a9.895 9.895 0 019.97-3.24c.338.084.646.26.893.506zm-9.643 7.368a2.893 2.893 0 105.675-1.128 2.893 2.893 0 00-5.675 1.128z"
      fill={fill}
    />
    <path
      d="M5.556 14.103c.256 0 .501.101.682.282L8.953 17.1a.964.964 0 01-1.364 1.364L4.874 15.75a.965.965 0 01.682-1.647z"
      fill={fill}
    />
  </svg>
);

IconTurbo.defaultProps = {
  ...iconDefaultProps,
};

export default IconTurbo;
