import * as React from 'react';
import { Box } from '../../../../layout/box';
import { useComponentStyles } from '../../../../system';

export interface SignBadgeProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** Value for notification badge */
  children?: React.ReactNode;
  /** Size of the badge. Defaults to 'md' */
  size?: 'sm' | 'md' | 'lg';
}

const SignBadge: React.FC<SignBadgeProps> = ({ children, size = 'md', ...rest }) => {
  const signBadgeStyle = useComponentStyles('signBadge', { size });
  return (
    <Box data-testid="sign-badge" sx={signBadgeStyle} {...rest}>
      {children}
    </Box>
  );
};
export default SignBadge;
