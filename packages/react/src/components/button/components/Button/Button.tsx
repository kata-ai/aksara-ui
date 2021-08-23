import * as React from 'react';
import clsx from 'clsx';

import { useComponentStyles } from '../../../../system';
import { ButtonBaseProps, ButtonSizes } from './types';
import { UnstyledButton } from '../UnstyledButton';
import { renderButtonChildren, renderButtonIcon } from './utils';

export interface ButtonProps extends ButtonBaseProps, React.ComponentPropsWithoutRef<'button'> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: ButtonSizes;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
}

/**
 * Buttons express what action will occur when the user clicks or touches it.
 * Buttons are used to initialize an action, either in the background or
 * foreground of an experience.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      style,
      size = 'md',
      icon,
      iconPosition = 'left',
      isLoading,
      disabled,
      variant = 'primary',
      block,
      width,
      selected,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const buttonBaseStyles = useComponentStyles('buttonBase', { size, variant });

    return (
      <UnstyledButton
        className={clsx(selected && 'selected', className)}
        style={style}
        disabled={disabled || isLoading}
        ref={ref}
        display={block ? 'flex' : 'inline-flex'}
        width={block ? '100%' : width}
        flexDirection={iconPosition === 'left' ? 'row' : 'row-reverse'}
        alignItems="center"
        justifyContent="center"
        type={type}
        sx={buttonBaseStyles}
        {...rest}
      >
        {renderButtonIcon({ icon, iconPosition, isLoading })}
        {renderButtonChildren({ isLoading, variant, children })}
      </UnstyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
