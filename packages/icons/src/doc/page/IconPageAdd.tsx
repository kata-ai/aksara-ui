import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPageAdd: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M14.8 7.714c-.371 0-.727-.15-.99-.418a1.443 1.443 0 01-.41-1.01V2h-7c-.371 0-.727.15-.99.418S5 3.05 5 3.428v17.143c0 .38.147.743.41 1.01.263.268.619.419.99.419h11.2c.371 0 .727-.15.99-.418.262-.268.41-.632.41-1.01V7.713h-4.2zm0 6.429h-2.1v2.143c0 .19-.074.37-.205.505a.693.693 0 01-.99 0 .722.722 0 01-.205-.505v-2.143H9.2a.693.693 0 01-.495-.21.722.722 0 010-1.01.693.693 0 01.495-.209h2.1v-2.143c0-.189.074-.37.205-.505a.693.693 0 01.99 0 .721.721 0 01.205.505v2.143h2.1c.186 0 .364.075.495.21a.721.721 0 010 1.01.693.693 0 01-.495.209z"
      fill={fill}
    />
    <path d="M18.587 6.286L14.8 2.42v3.865h3.787z" fill={fill} />
  </svg>
);

IconPageAdd.defaultProps = {
  ...iconDefaultProps,
};

export default IconPageAdd;
