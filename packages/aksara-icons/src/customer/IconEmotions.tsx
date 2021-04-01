import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconEmotions: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17.894 16.382a.5.5 0 01.593.377.492.492 0 01-.067.371 4 4 0 01-6.85 0 .5.5 0 11.85-.53 3 3 0 005.16 0 .5.5 0 01.314-.218zM17 15a1 1 0 100-2 1 1 0 000 2zM14 14a1 1 0 11-2 0 1 1 0 012 0z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.77 9.43a6 6 0 11-3.34 3.34c-.463.144-.945.22-1.43.23a5 5 0 115-5c-.01.485-.086.967-.23 1.43zm-2.512-2.85a.84.84 0 00-.588-.25.85.85 0 00-.84.84.84.84 0 00.84.83.83.83 0 00.83-.83.84.84 0 00-.242-.59zM6.92 6.579a.85.85 0 00-.591-.249.84.84 0 00-.83.84.83.83 0 00.83.83.84.84 0 00.84-.83.85.85 0 00-.249-.591zm-.753 4.282a.5.5 0 00.162-.151h.01a2.5 2.5 0 013.35.01.52.52 0 00.35.14.501.501 0 00.34-.86 3.53 3.53 0 00-4.72 0 .5.5 0 00.508.861zm6.054 8.296a5 5 0 105.556-8.314 5 5 0 00-5.556 8.314z"
      fill={fill}
    />
  </svg>
);

IconEmotions.defaultProps = {
  ...iconDefaultProps,
};

export default IconEmotions;
