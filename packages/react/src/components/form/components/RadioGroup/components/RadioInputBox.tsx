import * as React from 'react';

import { UnstyledButton, UnstyledButtonProps } from '../../../../../components/button';
import { useComponentStyles } from '../../../../../system';

export interface RadioInputBoxProps extends UnstyledButtonProps, React.ComponentPropsWithoutRef<'button'> {}

const RadioInputBox = React.forwardRef<HTMLButtonElement, RadioInputBoxProps>(({ children, ...rest }, ref) => {
  const radioInputBoxStyle = useComponentStyles('radioInputBox');
  return (
    <UnstyledButton ref={ref} sx={radioInputBoxStyle} {...rest}>
      {children}
    </UnstyledButton>
  );
});

export default RadioInputBox;
