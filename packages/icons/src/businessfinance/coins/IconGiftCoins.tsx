import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconGiftCoins: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.08 12.88A5.78 5.78 0 109.45 9.21a7.33 7.33 0 00-3.54.49l-.85.3a1.51 1.51 0 00-1.26-.66h-.3a1.5 1.5 0 00-1.5 1.5v6.91a1.5 1.5 0 001.5 1.5h.3a1.469 1.469 0 001.11-.5l2.59 1.57a4.7 4.7 0 002.43.68 4.64 4.64 0 001.59-.28l8.87-3.18a2.46 2.46 0 001.49-3.06 2.41 2.41 0 00-1.8-1.6zm-.36 2.77l-8.88 3.19a2.66 2.66 0 01-2.3-.23l-2.92-1.77a.78.78 0 00-.32-.12v-4.67h.17l1.18-.46a5.38 5.38 0 015.16.61l2.66 1.89-3.14.91a1.012 1.012 0 00-.46 1.81c.215.16.485.229.75.19a1 1 0 00.29-.05L17 15.39l2.51-.56a.41.41 0 01.49.28.44.44 0 01-.28.54z"
      fill={fill}
    />
  </svg>
);

IconGiftCoins.defaultProps = {
  ...iconDefaultProps,
};

export default IconGiftCoins;
