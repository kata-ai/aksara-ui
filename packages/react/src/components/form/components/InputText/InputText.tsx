import * as React from 'react';

import { Box, BoxProps } from '../../../../layout';
import { useComponentStyles } from '../../../../system';

export interface InputTextProps
  extends Omit<BoxProps, 'height' | 'width' | 'size'>,
    React.ComponentPropsWithoutRef<'input'> {
  /** True if this text input has an addon style */
  addon?: boolean;
  /** True if the input has errors. */
  errors?: boolean;
  /** Form size */
  inputSize?: 'md' | 'lg';
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, errors, addon, inputSize = 'md', sx, pl, pr, ...rest }, ref) => {
    const styles = useComponentStyles('inputText', { size: inputSize, variant: errors ? 'error' : 'default' });

    return (
      <Box
        as="input"
        type="text"
        className={className}
        ref={ref}
        sx={{ ...styles, ...sx }}
        pl={pl || 'sm'}
        pr={pr || 'sm'}
        {...rest}
      />
    );
  }
);

InputText.displayName = 'InputText';

export default InputText;
