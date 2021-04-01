import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconDocumentMedic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7 21.9h10c.53 0 1.04-.212 1.414-.59.375-.377.586-.888.586-1.422V5.602c0-.533-.21-1.045-.586-1.423A1.994 1.994 0 0017 3.59a3.52 3.52 0 01-1.084 2.376 3.479 3.479 0 01-2.416.964h-3a3.479 3.479 0 01-2.416-.964A3.52 3.52 0 017 3.59c-.53 0-1.04.212-1.414.59C5.21 4.556 5 5.068 5 5.601v14.286c0 .534.21 1.045.586 1.423.375.377.884.589 1.414.589zm2.6-10.614H11V9.878h2v1.408h1.4v2.012H13v1.409h-2v-1.409H9.6v-2.012zm-.4 5.03h5.6c.265 0 .52.107.707.295a1.009 1.009 0 01-.707 1.718H9.2a.997.997 0 01-.707-.295 1.01 1.01 0 010-1.423.997.997 0 01.707-.294z"
      fill={fill}
    />
    <path
      d="M10.5 4.918h3c.398 0 .78-.159 1.06-.442a1.514 1.514 0 000-2.134A1.496 1.496 0 0013.5 1.9h-3a1.492 1.492 0 00-1.06.442 1.51 1.51 0 00-.326 1.645 1.51 1.51 0 00.812.816c.182.076.377.115.574.115z"
      fill={fill}
    />
  </svg>
);

IconDocumentMedic.defaultProps = {
  ...iconDefaultProps,
};

export default IconDocumentMedic;
