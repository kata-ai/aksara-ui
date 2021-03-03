import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconModuleTick: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.884 3.241l.31.183a5.96 5.96 0 00.091 7.275l-1.371.9-7.082-4.666 6.285-3.692a1.74 1.74 0 011.767 0zm.005 9.883l1.756-1.152A5.952 5.952 0 0019 12.65v3.115a1.831 1.831 0 01-.894 1.582L11.889 21v-7.876zM3 8.552v7.213a1.832 1.832 0 00.894 1.582L10.111 21v-7.794a1.706 1.706 0 01-.157-.073L3 8.553zm10.674.67a4 4 0 116.65-4.444 4 4 0 01-6.65 4.444zm4.677-4.185a1 1 0 00-.707.293L16.44 6.535l-.065-.065a1 1 0 00-1.414 1.415l.772.772a1 1 0 001.414 0l1.912-1.913a1 1 0 00-.707-1.707z"
      fill={fill}
    />
  </svg>
);

IconModuleTick.defaultProps = {
  ...iconDefaultProps,
};

export default IconModuleTick;
