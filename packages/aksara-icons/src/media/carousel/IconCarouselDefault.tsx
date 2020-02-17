import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCarouselDefault: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 3H15C16.1046 3 17 3.89543 17 5V19C17 20.1046 16.1046 21 15 21H9C7.89543 21 7 20.1046 7 19V5C7 3.89543 7.89543 3 9 3ZM5 17V5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19V17ZM19.0004 5H19V19H19.0004C19.5309 19 20.0396 18.7893 20.4146 18.4142C20.7897 18.0391 21.0004 17.5304 21.0004 17V7C21.0004 6.46957 20.7897 5.96086 20.4146 5.58579C20.0396 5.21071 19.5309 5 19.0004 5Z"
      fill={fill}
    />
  </svg>
);

IconCarouselDefault.defaultProps = {
  ...iconDefaultProps,
};

export default IconCarouselDefault;
