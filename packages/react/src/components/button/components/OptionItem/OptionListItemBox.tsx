import * as React from 'react';

import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';
import { useComponentStyles } from '../../../../system';

export interface OptionListItemBoxProps extends UnstyledButtonProps, React.ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'bordered';
  isActive?: boolean;
  disabled?: boolean;
}

const OptionListItemBox = React.forwardRef<HTMLButtonElement, OptionListItemBoxProps>(
  ({ children, disabled, isActive, variant = 'default', sx, ...rest }, ref) => {
    const optionItemStyle = useComponentStyles('optionItem', { variant, isActive, disabled });
    return (
      <UnstyledButton type="button" ref={ref} sx={{ ...optionItemStyle, ...sx }} {...rest}>
        {children}
      </UnstyledButton>
    );
  }
);

export default OptionListItemBox;
