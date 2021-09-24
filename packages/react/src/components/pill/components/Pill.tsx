import * as React from 'react';
import { IconClose } from '@aksara-ui/icons';

import { Box } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { UnstyledButton, UnstyledButtonProps } from '../../button';

export interface PillProps extends Omit<UnstyledButtonProps, 'size'>, React.ComponentPropsWithoutRef<'button'> {
  /** The variant options available for a pill. */
  variant?: 'default' | 'info' | 'critical' | 'success' | 'active';
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** Add a custom icon to the left of the icon. */
  icon?: React.ReactNode;
  /** Set `true` to display the Close icon in the Pill. */
  hasCloseIcon?: boolean;
  /** Triggers when the pill is clicked. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Pill = React.forwardRef<HTMLButtonElement, PillProps>(
  (
    {
      className,
      style,
      children,
      variant = 'default',
      icon,
      hasCloseIcon = false,
      onClick,
      sx,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const boxStyles = useComponentStyles('pillRoot', { variant });

    return (
      <UnstyledButton
        ref={ref}
        style={style}
        className={className}
        sx={{ ...boxStyles, ...sx }}
        type={type}
        onClick={onClick}
        {...rest}
      >
        {icon}
        <Box as="span" display="inline-blick" px="xxs" fontSize="12px" lineHeight="18px">
          {children}
        </Box>
        {hasCloseIcon && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <IconClose size={12} fill="currentColor" aria-hidden="true" display="inline-block" />
          </Box>
        )}
      </UnstyledButton>
    );
  }
);

Pill.displayName = 'Pill';

export default Pill;
