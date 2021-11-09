import * as React from 'react';
import { Box, BoxProps } from '../../box';

export type WrapItemProps = BoxProps & React.LiHTMLAttributes<HTMLLIElement>;

const WrapItem = React.forwardRef<HTMLLIElement, WrapItemProps>(({ children, ...rest }, ref) => {
  return (
    <Box as="li" ref={ref} {...rest}>
      {children}
    </Box>
  );
});

WrapItem.displayName = 'WrapItem';

export default WrapItem;
