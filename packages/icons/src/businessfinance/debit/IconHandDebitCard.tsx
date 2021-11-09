import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconHandDebitCard: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H7.93a2 2 0 00-2 2v1.14A4.72 4.72 0 004.6 9.48l-2.6 4V19h3.39a4.71 4.71 0 002.55-.68 3.25 3.25 0 00.82-.79c.235-.347.488-.681.76-1H20a2 2 0 002-2V7a2 2 0 00-2-2zM7.93 7H20v1H7.93V7zm3.52 7.58l.5-.48a1.16 1.16 0 00-.08-1.75 1.25 1.25 0 00-1.56 0L7.93 14v-4H20v4.58h-8.55z"
      fill={fill}
    />
    <path d="M18.18 12h-2.11a1 1 0 000 2h2.11a1 1 0 000-2z" fill={fill} />
  </svg>
);

IconHandDebitCard.defaultProps = {
  ...iconDefaultProps,
};

export default IconHandDebitCard;
