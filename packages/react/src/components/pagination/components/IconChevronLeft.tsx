import * as React from 'react';

interface IconChevronLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const IconChevronLeft: React.FC<IconChevronLeftProps> = ({ size = 24, fill = '#313f4e', ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...rest}>
    <path
      d="M15.28 20.71a.999.999 0 00.71.29.996.996 0 001.004-1 1 1 0 00-.295-.71L9.407 12 16.7 4.71a1.003 1.003 0 00-1.419-1.42l-7.99 8a1 1 0 000 1.42l7.99 8z"
      fill={fill}
    />
  </svg>
);

export default IconChevronLeft;
