import * as React from 'react';
import { IconClose } from '@aksara-ui/icons';
import { Box, Stack } from '../../../layout';
import { Text } from '../../../typography';
import { useComponentStyles } from '../../../system';
import { UnstyledButton, UnstyledButtonProps } from '../../button';

export interface PillProps extends Omit<UnstyledButtonProps, 'size'>, React.ComponentPropsWithoutRef<'button'> {
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
  ({ className, style, children, icon, hasCloseIcon = false, onClick, sx, type = 'button', ...rest }, ref) => {
    const boxStyles = useComponentStyles('pillRoot');

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
        <Stack direction="horizontal" spacing={'xxs'} alignItems={'center'}>
          {icon}
          <Text scale={200}>{children}</Text>
          {hasCloseIcon && (
            <Box fontSize={12} width={12} height={12}>
              <IconClose size={12} fill="currentColor" aria-hidden="true" />
            </Box>
          )}
        </Stack>
      </UnstyledButton>
    );
  }
);

Pill.displayName = 'Pill';

export default Pill;
