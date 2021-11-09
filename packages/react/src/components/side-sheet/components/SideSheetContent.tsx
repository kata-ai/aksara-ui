import * as React from 'react';
import { Box, BoxProps } from '../../../layout';

export type SideSheetContentProps = BoxProps;

const SideSheetContent: React.FC<SideSheetContentProps> = ({ children, ...rest }) => {
  return (
    <Box flex="1 1 auto" pt="md" pb={64} px="xl" {...rest}>
      {children}
    </Box>
  );
};

SideSheetContent.displayName = 'SideSheetContent';

export default SideSheetContent;
