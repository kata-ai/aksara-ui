import * as React from 'react';

import { UnstyledButton, UnstyledButtonProps } from '../../../../button';
import { useComponentStyles } from '../../../../../system';

export interface RadioInputBoxProps extends UnstyledButtonProps, React.ComponentPropsWithoutRef<'button'> {
  variant?: 'simple' | 'with-indicator';
}

const RadioInputBox = React.forwardRef<HTMLButtonElement, RadioInputBoxProps>(
  ({ children, variant = 'simple', ...rest }, ref) => {
    const radioInputBoxStyle = useComponentStyles('radioInputBox', { variant });
    return (
      <UnstyledButton ref={ref} sx={radioInputBoxStyle} {...rest}>
        {children}
      </UnstyledButton>
    );
  }
);

export default RadioInputBox;
