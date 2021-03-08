import * as React from 'react';
import clsx from 'clsx';
import { IconClose } from '@aksara-ui/icons';

import { Box } from '../../../foundations';
import { BasePill, BasePillProps, CloseButton } from '../styles';
import { boxMarginVariants, PillSizeVariants } from '../variants';

export interface PillProps extends Omit<BasePillProps, 'pillSize'> {
  /** Size of the Pill. */
  size?: PillSizeVariants;
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** Triggers when the Close button is clicked. */
  onClose?: () => void;
}

const Pill: React.FC<PillProps> = ({
  className,
  style,
  children,
  size = 24,
  variant = 'default',
  onClose,
  ...rest
}) => {
  return (
    <BasePill
      display="block"
      flexDirection="row"
      className={clsx('pill', className)}
      pillSize={size}
      style={style}
      variant={variant}
      borderRadius="4px"
      position="relative"
      overflow="hidden"
      {...rest}
    >
      <Box as="span" role="button" pr={onClose && boxMarginVariants[size]}>
        {children}
      </Box>
      {onClose && (
        <CloseButton size={size} onClick={onClose} outline={variant === 'outline'}>
          <IconClose fill="currentColor" size={14} aria-hidden="true" display="inline-block" />
        </CloseButton>
      )}
    </BasePill>
  );
};

Pill.defaultProps = {
  size: 24,
  variant: 'default',
  className: undefined,
  style: undefined,
};

Pill.displayName = 'Pill';

export default Pill;
