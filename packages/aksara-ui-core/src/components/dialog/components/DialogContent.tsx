import * as React from 'react';
import { Box } from '../../../layout';

export interface DialogContentProps {
  className?: string;
  style?: React.CSSProperties;
}

const DialogContent: React.FC<DialogContentProps> = ({ className, style, children }) => {
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

DialogContent.displayName = 'DialogContent';

export default DialogContent;
