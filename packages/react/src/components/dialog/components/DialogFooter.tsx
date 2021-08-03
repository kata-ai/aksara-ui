import * as React from 'react';
import { Box } from '../../../layout';

export interface DialogFooterProps {
  className?: string;
  style?: React.CSSProperties;
}

const DialogFooter: React.FC<DialogFooterProps> = ({ className, style, children }) => {
  return (
    <Box className={className} style={style} pt="md" px="xl" pb="xl">
      {children}
    </Box>
  );
};

DialogFooter.displayName = 'DialogFooter';

export default DialogFooter;
