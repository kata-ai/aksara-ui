import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';
import { useComponentStyles } from '../../../../system';

export interface InputRadioProps
  extends Omit<BoxProps, 'height' | 'width' | 'size'>,
    React.ComponentPropsWithoutRef<'input'> {}

const InputRadio = React.forwardRef<HTMLInputElement, InputRadioProps>(
  ({ className, checked, value, disabled, ...rest }, ref) => {
    const inputRadiostyle = useComponentStyles('inputRadioBase');
    return (
      <Box
        as="input"
        type="radio"
        className={className}
        ref={ref}
        sx={inputRadiostyle}
        checked={checked}
        value={value}
        disabled={disabled}
        {...rest}
      />
    );
  }
);

InputRadio.displayName = 'InputRadio';

export default InputRadio;
