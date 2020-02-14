import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMessageBot: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 11.287a5.282 5.282 0 00-3.005-.937A5.246 5.246 0 0011.874 17H7.653a2 2 0 00-1.414.586l-.825.824A2 2 0 012.002 17H2V7a2 2 0 012-2h14a2 2 0 012 2v4.287zm.507 4.532h.052a.441.441 0 01.441.441v1.33a.441.441 0 01-.441.441h-.064a.945.945 0 01-.737.74 20.83 20.83 0 01-2.79.229 19.822 19.822 0 01-2.713-.229.945.945 0 01-.737-.74h-.077A.44.44 0 0113 17.59v-1.33a.441.441 0 01.441-.44h.05a3.517 3.517 0 013.058-3.473A3.432 3.432 0 0120.1 14.32l.005.01c.065.133.124.27.174.408l.01.03c.048.136.09.274.123.414.007.027.011.055.015.083l.011.06.006.029c.02.098.04.197.052.298l.006.099.004.068zm-.979 1.579a.441.441 0 00.13-.312v-.888a.883.883 0 00-.883-.883s-1.314-.023-1.753-.023c-.444 0-1.776.023-1.776.023a.882.882 0 00-.882.883v.888a.441.441 0 00.44.441s1.647.064 2.197.064c.553 0 2.215-.064 2.215-.064.117 0 .23-.047.312-.13zm-1.194-.603a.441.441 0 100-.883.441.441 0 000 .883zm-2.206-.442a.441.441 0 11-.882 0 .441.441 0 01.882 0z"
      fill={fill}
    />
  </svg>
);

IconMessageBot.defaultProps = {
  ...iconDefaultProps,
};

export default IconMessageBot;
