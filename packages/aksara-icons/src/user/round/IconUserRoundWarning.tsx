import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconUserRoundWarning: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15.767 10.5a5.22 5.22 0 00-2.907.885 5.246 5.246 0 00-1.927 2.356 5.267 5.267 0 001.135 5.721A5.227 5.227 0 0017.77 20.6a5.237 5.237 0 002.348-1.933 5.263 5.263 0 00-.65-6.63 5.224 5.224 0 00-3.7-1.537zm-.06 8.25a.746.746 0 01-.69-.463.753.753 0 01.545-1.023.745.745 0 01.893.736.751.751 0 01-.747.75zm.748-3a.751.751 0 01-.747.75.746.746 0 01-.748-.75V13.5a.751.751 0 01.748-.75.746.746 0 01.747.75v2.25zM10.475 10.5a3.744 3.744 0 003.738-3.75A3.744 3.744 0 0010.475 3a3.744 3.744 0 00-3.737 3.75 3.744 3.744 0 003.737 3.75zM3 15.75v1.5c0 .597.236 1.169.657 1.591.42.422.99.659 1.586.659h4.94a6.713 6.713 0 010-7.5H6.739c-.992 0-1.942.395-2.643 1.098A3.756 3.756 0 003 15.75z"
      fill={fill}
    />
  </svg>
);

IconUserRoundWarning.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserRoundWarning;
