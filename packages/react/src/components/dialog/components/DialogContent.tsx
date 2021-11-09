import * as React from 'react';
import { Box } from '../../../layout';

export interface DialogContentProps {
  className?: string;
  style?: React.CSSProperties;
}

const ModalContent: React.FC<DialogContentProps> = ({ className, style, children }) => {
  return (
    <Box className={className} style={style} display="flex" flexDirection="column" flex="1 1 auto" px="lg" py="md">
      {children}
    </Box>
  );
};

ModalContent.displayName = 'ModalContent';

/** @deprecated - use `ModalContent` instead */
export const DialogContent = ModalContent;

export default ModalContent;
