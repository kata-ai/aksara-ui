import * as React from 'react';
import { Box } from '../../../foundations';

export interface SideSheetContentProps {
  className?: string;
  style?: React.CSSProperties;
}

const SideSheetContent: React.FC<SideSheetContentProps> = ({ className, style, children }) => {
  return (
    <Box
      className={className}
      style={style}
      display="flex"
      flexDirection="column"
      flex="1 1 auto"
      pt="md"
      px="xl"
      pb="xl"
    >
      {children}
    </Box>
  );
};

SideSheetContent.displayName = 'SideSheetContent';

export default SideSheetContent;
