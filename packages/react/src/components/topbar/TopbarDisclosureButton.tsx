import * as React from 'react';
import { useComponentStyles } from '../../system';
import { UnstyledButton, UnstyledButtonProps } from '../button';

export interface TopbarDisclosureButtonProps extends UnstyledButtonProps, React.ComponentPropsWithoutRef<'button'> {
  isActive?: boolean;
}

const TopbarDisclosureButton = React.forwardRef<HTMLButtonElement, TopbarDisclosureButtonProps>(
  ({ className, style, sx, isActive, type = 'button', children, ...rest }, ref) => {
    const topbarDisclosureButtonStyles = useComponentStyles('topbarDisclosureButton', { isActive });

    return (
      <UnstyledButton
        ref={ref}
        className={className}
        style={style}
        type={type}
        sx={{ ...topbarDisclosureButtonStyles, ...sx }}
        {...rest}
      >
        {children}
      </UnstyledButton>
    );
  }
);

TopbarDisclosureButton.displayName = 'TopbarDisclosureButton';

export default TopbarDisclosureButton;
