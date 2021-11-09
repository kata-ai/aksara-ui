import * as React from 'react';
import { useComponentStyles } from '../../system';
import { Box, BoxProps } from '../../layout';

export type TopbarProps = BoxProps & React.ComponentPropsWithoutRef<'header'>;

const Topbar = React.forwardRef<HTMLDivElement, TopbarProps>(({ className, style, sx, children, ...rest }, ref) => {
  const topbarStyles = useComponentStyles('topbarBase');

  return (
    <Box ref={ref} as="header" className={className} style={style} sx={{ ...topbarStyles, ...sx }} {...rest}>
      {children}
    </Box>
  );
});

Topbar.displayName = 'Topbar';

export default Topbar;
