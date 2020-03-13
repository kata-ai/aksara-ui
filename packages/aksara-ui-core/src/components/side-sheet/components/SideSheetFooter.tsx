import * as React from 'react';
import { Box } from '../../../foundations';

export interface SideSheetFooterProps {
  className?: string;
  style?: React.CSSProperties;
}

const SideSheetFooter: React.FC<SideSheetFooterProps> = ({ className, style, children }) => {
  return (
    <Box className={className} style={style} pt="md" px="xl" pb="xl">
      {children}
    </Box>
  );
};

SideSheetFooter.displayName = 'SideSheetFooter';

export default SideSheetFooter;
