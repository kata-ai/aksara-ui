import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';
import { Text } from '../../../../typography';

export interface InputPrefixProps extends BoxProps, React.ComponentPropsWithoutRef<'div'> {
  disabled?: boolean;
}

const InputPrefix = React.forwardRef<HTMLDivElement, InputPrefixProps>(
  ({ className, children, disabled, ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        color={disabled ? 'greymed01' : 'greymed04'}
        pl={12}
        {...rest}
      >
        <Text fontSize="12px" lineHeight="18px">
          {children}
        </Text>
      </Box>
    );
  }
);

InputPrefix.displayName = 'InputPrefix';

export default InputPrefix;
