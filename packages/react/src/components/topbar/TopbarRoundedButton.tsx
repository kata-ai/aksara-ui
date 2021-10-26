import * as React from 'react';
import { useComponentStyles } from '../../system';
import { UnstyledButton, UnstyledButtonProps } from '../button';

export interface TopbarRoundedButtonProps extends UnstyledButtonProps, React.ComponentPropsWithoutRef<'button'> {
  isActive?: boolean;
}

const TopbarRoundedButton = React.forwardRef<HTMLButtonElement, TopbarRoundedButtonProps>(
  ({ className, style, sx, isActive, children, ...rest }, ref) => {
    const topbarRoundedButtonStyles = useComponentStyles('topbarRoundedButton', { isActive });

    return (
      <UnstyledButton
        ref={ref}
        className={className}
        style={style}
        sx={{ ...topbarRoundedButtonStyles, ...sx }}
        {...rest}
      >
        {children}
      </UnstyledButton>
    );
  }
);

TopbarRoundedButton.displayName = 'TopbarRoundedButton';

export default TopbarRoundedButton;
