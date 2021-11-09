import * as React from 'react';
import { useComponentStyles } from '../../system';
import { UnstyledButton, UnstyledButtonProps } from '../button';

export type BreadcrumbOverflowProps = UnstyledButtonProps & React.ComponentPropsWithoutRef<'button'>;

const BreadcrumbOverflow = React.forwardRef<HTMLButtonElement, BreadcrumbOverflowProps>(
  ({ className, children, type = 'button', sx, ...rest }, ref) => {
    const styles = useComponentStyles('breadcrumbItem', { variant: 'default' });
    return (
      <UnstyledButton ref={ref} type={type} className={className} sx={{ ...styles, ...sx }} {...rest}>
        {children}
      </UnstyledButton>
    );
  }
);

export default BreadcrumbOverflow;
