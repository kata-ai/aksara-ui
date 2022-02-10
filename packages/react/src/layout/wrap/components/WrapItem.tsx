import * as React from 'react';
import { Box, BoxProps } from '../../box';

export type WrapItemProps = BoxProps & React.LiHTMLAttributes<HTMLLIElement>;

const WrapItem = React.forwardRef<HTMLLIElement, WrapItemProps>(({ children, ...rest }, ref) => {
  return (
    <Box
      as="li"
      ref={ref}
      sx={{
        borderRadius: 'lg',
        '&:focus-visible': {
          outline: 'none',
          boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
});

WrapItem.displayName = 'WrapItem';

export default WrapItem;
