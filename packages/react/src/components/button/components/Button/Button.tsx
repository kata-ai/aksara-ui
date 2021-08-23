import * as React from 'react';
import clsx from 'clsx';

import { Box, Text } from '../../../../layout';
import { theme } from '../../../../theme';
import { useComponentStyles } from '../../../../system';
import { Spinner } from '../../../loading';
import { ButtonBaseProps, ButtonSizes } from './types';
import { UnstyledButton } from '../UnstyledButton';

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

    const renderIcon = () => {
      if (icon) {
        return (
          <Box
            mr={iconPosition === 'left' ? 'xs' : null}
            ml={iconPosition === 'right' ? 'xs' : null}
            style={isLoading ? { visibility: 'hidden' } : undefined}
          >
            {React.createElement(icon, { fill: 'currentColor', size: 16 })}
          </Box>
        );
      }

      return null;
    };

    const renderButtonChildren = () => {
      if (isLoading) {
        return (
          <>
            <Box position="absolute" width={16} height={16}>
              <Spinner
                size={16}
                spinnerColor={variant === 'secondary' ? theme.colors.greydark02 : theme.colors.greylight01}
              />
            </Box>
            <Text visibility="hidden">{children}</Text>
          </>
        );
      }

      return <Text>{children}</Text>;
    };

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
        {renderIcon()}
        {renderButtonChildren()}
      </UnstyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
