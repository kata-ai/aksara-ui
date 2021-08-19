import * as React from 'react';
import { IconCloseRounded } from '@aksara-ui/icons';

import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { UnstyledButton } from '../../button';

export interface PillProps extends Omit<BoxProps, 'size'> {
  /** The variant options available for a pill. */
  variant?: 'default' | 'grey' | 'indigo' | 'yellow' | 'red' | 'green' | 'blue';
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** Set `true` to display the Close button. */
  closable?: boolean;
  /** Triggers when the Close button is clicked. */
  onClose?: () => void;
}

const Pill: React.FC<PillProps> = ({
  className,
  style,
  children,
  variant = 'default',
  closable = false,
  onClose,
  sx,
  ...rest
}) => {
  const boxStyles = useComponentStyles('pillRoot', { variant });

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (onClose) {
      onClose();
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      borderRadius={9999}
      justifyContent="space-between"
      style={style}
      className={className}
      sx={{ ...boxStyles, ...sx }}
      {...rest}
    >
      <Box as="span" px="xs" py={2}>
        {children}
      </Box>
      {closable && onClose && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <UnstyledButton
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
            pl="xxs"
            pr="xs"
            aria-label="Close"
            onClick={handleClose}
          >
            <IconCloseRounded size={16} fill="currentColor" aria-hidden="true" display="inline-block" />
          </UnstyledButton>
        </Box>
      )}
    </Box>
  );
};

Pill.displayName = 'Pill';

export default Pill;
