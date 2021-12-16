import * as React from 'react';
import { Box } from '../../../layout';

export interface ModalFooterProps {
  className?: string;
  style?: React.CSSProperties;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ className, style, children }) => {
  return (
    <Box className={className} style={style} p="lg">
      {children}
    </Box>
  );
};

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
