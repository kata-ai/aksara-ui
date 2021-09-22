import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';

export interface InputGroupProps extends BoxProps, React.ComponentPropsWithoutRef<'div'> {}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(({ className, children, ...rest }, ref) => {
  return (
    <Box ref={ref} className={className} position="relative" borderRadius={8} {...rest}>
      {children}
    </Box>
  );
});

InputGroup.displayName = 'InputGroup';

export default InputGroup;
