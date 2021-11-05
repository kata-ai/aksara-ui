import * as React from 'react';

import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';
import { useComponentStyles } from '../../../../system';

export interface OptionListItemBoxProps extends UnstyledButtonProps, React.ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'bordered';
}

const OptionListItemBox = React.forwardRef<HTMLButtonElement, OptionListItemBoxProps>(
  ({ children, variant = 'default', sx, ...rest }, ref) => {
    const optionItemStyle = useComponentStyles('optionItem', { variant });
    return (
      <UnstyledButton ref={ref} sx={{ ...optionItemStyle, ...sx }} {...rest}>
        {children}
      </UnstyledButton>
    );
  }
);

export default OptionListItemBox;
