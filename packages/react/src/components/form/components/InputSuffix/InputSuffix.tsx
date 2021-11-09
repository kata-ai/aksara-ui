import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';
import { Text } from '../../../../typography';

export interface InputSuffixProps extends BoxProps, React.ComponentPropsWithoutRef<'div'> {
  disabled?: boolean;
}

const InputSuffix = React.forwardRef<HTMLDivElement, InputSuffixProps>(
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
        right={0}
        color={disabled ? 'greymed01' : 'greymed04'}
        pr={12}
        {...rest}
      >
        <Text fontSize="12px" lineHeight="18px">
          {children}
        </Text>
      </Box>
    );
  }
);

InputSuffix.displayName = 'InputPrefix';

export default InputSuffix;
