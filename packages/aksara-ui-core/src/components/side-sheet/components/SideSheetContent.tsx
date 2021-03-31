import * as React from 'react';
import { Box } from '../../../foundations';
import { DialogContentProps } from '../../dialog';

export type SideSheetContentProps = DialogContentProps;

const SideSheetContent: React.FC<SideSheetContentProps> = ({ children, ...rest }) => {
  return (
    <Box flex="1 1 auto" pt="md" pb={64} px="xl" {...rest}>
      {children}
    </Box>
  )
};

SideSheetContent.displayName = 'SideSheetContent';

export default SideSheetContent;
