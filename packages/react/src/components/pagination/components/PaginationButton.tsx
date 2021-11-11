import React from 'react';
import { UnstyledButton, UnstyledButtonProps } from '../../button';
import { useComponentStyles } from '../../../system';

export interface PaginationButtonProps extends UnstyledButtonProps, React.ComponentPropsWithoutRef<'button'> {
  isActive?: boolean;
}

const PaginationButton = React.forwardRef<HTMLButtonElement, PaginationButtonProps>(
  ({ className, style, sx, isActive, children, ...rest }, ref) => {
    const paginationButtonStyle = useComponentStyles('paginationButton', { isActive });

    return (
      <UnstyledButton ref={ref} className={className} style={style} sx={{ ...paginationButtonStyle, ...sx }} {...rest}>
        {children}
      </UnstyledButton>
    );
  }
);

PaginationButton.displayName = 'PaginationButton';

export default PaginationButton;
