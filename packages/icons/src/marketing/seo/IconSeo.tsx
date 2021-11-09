import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconSeo: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2zM15.81 9.46A2.46 2.46 0 0118.37 12a2.57 2.57 0 11-5.13 0 2.458 2.458 0 012.57-2.54zm-6 .46a.34.34 0 01.38-.37h2.32a.33.33 0 01.37.37v.28a.34.34 0 01-.37.38H11v.89h1.12a.34.34 0 01.38.38v.27a.34.34 0 01-.38.38H11v.92h1.59a.34.34 0 01.38.38v.28a.34.34 0 01-.38.37h-2.44a.341.341 0 01-.38-.37l.04-4.16zM5.7 11a1.58 1.58 0 011.75-1.54 2.44 2.44 0 011.32.37.36.36 0 01.12.51l-.17.33c-.13.26-.32.22-.51.13a1.67 1.67 0 00-.78-.23c-.37 0-.53.15-.53.34 0 .72 2.17.54 2.17 2.1a1.56 1.56 0 01-1.72 1.53 2.78 2.78 0 01-1.56-.49.33.33 0 01-.07-.52l.21-.31c.14-.2.3-.21.52-.09.268.177.579.28.9.3.35 0 .52-.15.52-.34 0-.7-2.17-.59-2.17-2.09z"
      fill={fill}
    />
    <path d="M15.81 13.44A1.36 1.36 0 0017.13 12a1.32 1.32 0 00-2.64 0 1.351 1.351 0 001.32 1.44z" fill={fill} />
  </svg>
);

IconSeo.defaultProps = {
  ...iconDefaultProps,
};

export default IconSeo;
