import * as React from 'react';

import { useComponentStyles } from '../../../../system';
import { renderButtonChildren, renderButtonIcon } from '../Button/utils';
import { PlainButtonBaseProps, PlainButtonSizes } from './types';
import { UnstyledButton } from '../UnstyledButton';

export interface PlainButtonProps extends PlainButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: PlainButtonSizes;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
}

const PlainButton = React.forwardRef<HTMLButtonElement, PlainButtonProps>(
  ({ children, size = 'sm', icon, iconPosition, disabled, isLoading, variant = 'primary', ...rest }, ref) => {
    const plainButtonStyles = useComponentStyles('plainButton', { size, variant });

    return (
      <UnstyledButton
        disabled={disabled || isLoading}
        ref={ref}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        sx={plainButtonStyles}
        {...rest}
      >
        {renderButtonIcon({ icon, iconPosition, isLoading })}
        {renderButtonChildren({ isLoading, variant, children })}
      </UnstyledButton>
    );
  }
);

PlainButton.displayName = 'LinkButton';

export default PlainButton;
