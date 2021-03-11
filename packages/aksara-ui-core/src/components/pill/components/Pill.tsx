import * as React from 'react';
import styled, { css } from 'styled-components';
import { IconClose } from '@aksara-ui/icons';

import { Box, BoxProps } from '../../../foundations';
import { useComponentStyles } from '../../../system';
import { IconButton } from '../../button';
import { theme } from '../../../theme';

export interface PillProps extends Omit<BoxProps, 'size'> {
  /** The variant options available for a pill. */
  variant?: 'default' | 'neutral' | 'info' | 'warning' | 'critical' | 'success';
  /** Size of the pill. Defaults to 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** Triggers when the Close button is clicked. */
  onClose?: () => void;
}

const CloseButton = styled(IconButton)<{ outline?: boolean }>`
  background-color: rgba(49, 63, 78, 0.2);
  color: ${theme.colors.grey03};
  border-radius: 0;
  outline: none;
  height: 100%;

  svg {
    width: 16px;
    height: 16px;
  }

  &:focus,
  &:active {
    border-width: 0 !important;
    box-shadow: none !important;
  }

  ${({ outline }) =>
    outline &&
    css`
      color: ${theme.colors.grey08};
    `}
`;

const Pill: React.FC<PillProps> = ({
  className,
  style,
  children,
  size = 'sm',
  variant = 'default',
  onClose,
  sx,
  ...rest
}) => {
  const boxStyles = useComponentStyles('pill', { variant });
  const buttonStyles = useComponentStyles('pill', { size, buttonVariant: variant });

  return (
    <Box
      display="flex"
      flexDirection="row"
      borderRadius="4px"
      justifyContent="space-between"
      style={style}
      className={className}
      sx={{ ...boxStyles, ...sx }}
      {...rest}
    >
      <Box as="span" role="button" sx={{ ...buttonStyles, ...sx }}>
        {children}
      </Box>
      {onClose && (
        <CloseButton onClick={onClose} outline={variant === 'neutral'}>
          <IconClose fill="currentColor" aria-hidden="true" display="inline-block" />
        </CloseButton>
      )}
    </Box>
  );
};

Pill.displayName = 'Pill';

export default Pill;
