import * as React from 'react';

import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';
import { useComponentStyles } from '../../../../system';

export interface OptionListItemBoxProps extends UnstyledButtonProps, React.ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'bordered';
}

const OptionListItemBox = React.forwardRef<HTMLButtonElement, OptionListItemBoxProps>(
  ({ children, variant = 'simple', ...rest }, ref) => {
    const radioInputBoxStyle = useComponentStyles('optionItem', { variant });
    return (
      <UnstyledButton ref={ref} sx={radioInputBoxStyle} {...rest}>
        {children}
      </UnstyledButton>
    );
  }
);

export default OptionListItemBox;
