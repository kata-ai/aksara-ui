import * as React from 'react';

import { Box, BoxProps } from '../../../../layout';
import { useComponentStyles } from '../../../../system';

export interface InputTextareaProps extends BoxProps, React.ComponentPropsWithoutRef<'textarea'> {
  /** True if the input has errors. */
  errors?: boolean;
  _wrapperProps?: BoxProps;
}

const InputTextarea = React.forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  ({ className, errors, sx, pt, px, pb, _wrapperProps, ...rest }, ref) => {
    const styles = useComponentStyles('inputTextarea', { variant: errors ? 'error' : 'default' });

    return (
      <Box position="relative" borderRadius={8} {..._wrapperProps}>
        <Box
          as="textarea"
          ref={ref}
          className={className}
          sx={{ ...styles, ...sx }}
          pt={pt || 'md'}
          px={px || 'md'}
          pb={pb || '28px'}
          {...rest}
        />
      </Box>
    );
  }
);

InputTextarea.displayName = 'InputTextarea';

export default InputTextarea;
