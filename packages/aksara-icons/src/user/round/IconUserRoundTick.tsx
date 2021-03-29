import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconUserRoundTick: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M10.475 10.5a3.744 3.744 0 003.738-3.75A3.744 3.744 0 0010.475 3a3.744 3.744 0 00-3.737 3.75 3.744 3.744 0 003.737 3.75zM6.738 12c-.992 0-1.942.395-2.643 1.098A3.756 3.756 0 003 15.75v1.5c0 .597.236 1.169.657 1.591.42.422.99.659 1.586.659h4.94a6.713 6.713 0 010-7.5H6.739zM15.767 10.5a5.22 5.22 0 00-2.907.885 5.246 5.246 0 00-1.927 2.356 5.267 5.267 0 001.135 5.721A5.227 5.227 0 0017.77 20.6a5.237 5.237 0 002.348-1.933 5.263 5.263 0 00-.65-6.63 5.224 5.224 0 00-3.7-1.537zm1.966 5.033l-1.495 1.5a.748.748 0 01-1.061 0l-.748-.75a.754.754 0 01.531-1.286c.2 0 .39.08.53.22l.218.226.964-.976a.75.75 0 111.061 1.066z"
      fill={fill}
    />
  </svg>
);

IconUserRoundTick.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserRoundTick;
