import * as React from 'react';

import { Box, BoxProps } from '../../../../../layout';
import { useComponentStyles } from '../../../../../system';

export interface RadioInputBoxProps extends BoxProps, React.ComponentPropsWithoutRef<'div'> {}

const RadioInputBox = React.forwardRef<HTMLDivElement, RadioInputBoxProps>(({ children, ...rest }, ref) => {
  const radioInputBoxStyle = useComponentStyles('radioInputBox');
  return (
    <Box ref={ref} sx={radioInputBoxStyle} {...rest}>
      {children}
    </Box>
  );
});

export default RadioInputBox;
