import * as React from 'react';
import { useComponentStyles } from '../../system';
import { UnstyledButton, UnstyledButtonProps } from '../button';

export type TopbarRoundedButtonProps = UnstyledButtonProps & React.ComponentPropsWithoutRef<'button'>;

const TopbarRoundedButton = React.forwardRef<HTMLButtonElement, TopbarRoundedButtonProps>(
  ({ className, style, sx, children, ...rest }, ref) => {
    const topbarRoundedButtonStyles = useComponentStyles('topbarRoundedButton');

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
