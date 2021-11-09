import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPanelReply: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 17.992h4.977a1 1 0 010 2H4.999a2.001 2.001 0 01-1.999-2V5a2.001 2.001 0 011.999-2h12.986a2.002 2.002 0 012 2v5a1 1 0 01-2 0V7.998H4.998L5 17.992z"
      fill={fill}
    />
    <path
      d="M20.996 16.018a.999.999 0 01-.073.363.993.993 0 01-.182.275.113.113 0 00-.015.023c-.005.009-.01.018-.017.026l-2.633 2.647a1 1 0 11-1.418-1.41l.936-.941h-1.59a1 1 0 00-.997.999v2a1 1 0 11-2 0v-2a3.002 3.002 0 012.997-2.998L17.597 15l-.933-.938a1 1 0 111.418-1.41l2.624 2.639h.001l.002.002c.006.006.01.013.014.02a.09.09 0 00.012.02.903.903 0 01.257.624c0 .007.002.014.004.02.002.007.004.014.004.021l-.002.01a.032.032 0 00-.002.01z"
      fill={fill}
    />
  </svg>
);

IconPanelReply.defaultProps = {
  ...iconDefaultProps,
};

export default IconPanelReply;
