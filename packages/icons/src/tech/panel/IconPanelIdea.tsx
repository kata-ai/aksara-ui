import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPanelIdea: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 18l8.003.021a1 1 0 01-.003 2h-.003l-8-.021A2.002 2.002 0 013 18V5a2.002 2.002 0 012-2h13a2.002 2.002 0 012 2v3.98a1 1 0 01-2 0V8H5v10z"
      fill={fill}
    />
    <path
      d="M15.914 12.836c.42-.404.948-.677 1.52-.784A3.001 3.001 0 0121 14.995a2.963 2.963 0 01-1.212 2.391c-.226.17-.414.385-.552.631h-.006l.012 1.102a.49.49 0 01.073.757.501.501 0 01-.354.147.983.983 0 01-1.966 0h-.046a.5.5 0 01-.202-.959l-.012-1.052a1.754 1.754 0 00-.513-.616 2.987 2.987 0 01-.308-4.56z"
      fill={fill}
    />
  </svg>
);

IconPanelIdea.defaultProps = {
  ...iconDefaultProps,
};

export default IconPanelIdea;
