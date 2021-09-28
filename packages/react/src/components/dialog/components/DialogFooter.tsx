import * as React from 'react';
import { Box } from '../../../layout';

export interface DialogFooterProps {
  className?: string;
  style?: React.CSSProperties;
}

const ModalFooter: React.FC<DialogFooterProps> = ({ className, style, children }) => {
  return (
    <Box className={className} style={style} p="lg">
      {children}
    </Box>
  );
};

ModalFooter.displayName = 'ModalFooter';

/** @deprecated - use `ModalFooter` instead */
export const DialogFooter = ModalFooter;

export default ModalFooter;
