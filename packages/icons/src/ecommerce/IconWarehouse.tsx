import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconWarehouse: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11 21v-7a1 1 0 00-1-1H7.5v2.595a.25.25 0 01-.36.225l-.53-.265a.244.244 0 00-.22 0l-.53.265a.25.25 0 01-.36-.225V13H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1zM22 21v-7a1 1 0 00-1-1h-2.5v2.595a.25.25 0 01-.36.225l-.53-.265a.244.244 0 00-.22 0l-.53.265a.25.25 0 01-.36-.225V13H14a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1zM17 10V3a.952.952 0 00-.325-.707A1.177 1.177 0 0015.889 2H13.11v2.595a.23.23 0 01-.035.121.263.263 0 01-.095.091.3.3 0 01-.27.013l-.589-.265a.297.297 0 00-.244 0l-.59.265a.304.304 0 01-.269-.013.263.263 0 01-.095-.09.23.23 0 01-.035-.122V2H8.11c-.295 0-.577.105-.786.293A.952.952 0 007 3v7c0 .265.117.52.325.707.209.188.491.293.786.293h7.778c.295 0 .577-.105.786-.293A.952.952 0 0017 10z"
      fill={fill}
    />
  </svg>
);

IconWarehouse.defaultProps = {
  ...iconDefaultProps,
};

export default IconWarehouse;
