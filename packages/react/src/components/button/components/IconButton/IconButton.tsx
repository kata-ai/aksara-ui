import * as React from 'react';
import clsx from 'clsx';

import { useComponentStyles } from '../../../../system';
import { UnstyledButton } from '../UnstyledButton';
import { IconButtonBaseProps, IconButtonSizes } from './types';

export interface IconButtonProps extends IconButtonBaseProps, React.ComponentPropsWithoutRef<'button'> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: IconButtonSizes;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
  /** indicate button is selected */
  selected?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      className,
      style,
      size = 'md',
      selected,
      disabled,
      isLoading,
      type = 'button',
      variant = 'secondary',
      ...rest
    },
    ref
  ) => {
    const iconButtonStyles = useComponentStyles('iconButton', { size, variant, selected });

    return (
      <UnstyledButton
        className={clsx(selected && 'selected', className)}
        style={style}
        disabled={disabled || isLoading}
        ref={ref}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        type={type}
        sx={iconButtonStyles}
        {...rest}
      >
        {children}
      </UnstyledButton>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
