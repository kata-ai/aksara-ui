import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconDislike: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.355 14.489h-2.3l.15.947a.891.891 0 010 .17v1.925c-.031.616-.279 1.2-.698 1.65a2.567 2.567 0 01-3.32.377 2.6 2.6 0 01-1.044-1.452 4.44 4.44 0 00-1.37-2.419l-1.681-.926c-.351.278-.784.43-1.23.433H5c-.531 0-1.04-.213-1.415-.59A2.022 2.022 0 013 13.179V6.015c0-.534.21-1.047.586-1.425.375-.378.884-.59 1.415-.59h1.86a1.99 1.99 0 011.65.887A3.745 3.745 0 0110.924 4h4.23c.842 0 1.664.251 2.363.72.7.47 1.246 1.138 1.57 1.92l1.71 4.15a2.686 2.686 0 01-.24 2.507 2.637 2.637 0 01-2.202 1.192zm.6-2.922l-1.72-4.151a2.253 2.253 0 00-.828-1.02 2.23 2.23 0 00-1.253-.38h-4.231a1.79 1.79 0 00-1.38.654l-.681.816v5.4l1.87 1.008c1.601.887 2.281 3.466 2.351 3.748a.595.595 0 00.56.464.578.578 0 00.58-.575v-1.843l-.22-1.2h-.91a.997.997 0 01-.707-.294 1.011 1.011 0 010-1.425.997.997 0 01.707-.296h5.242a.648.648 0 00.647-.591.659.659 0 00-.047-.315h.02z"
      fill={fill}
    />
  </svg>
);

IconDislike.defaultProps = {
  ...iconDefaultProps,
};

export default IconDislike;
