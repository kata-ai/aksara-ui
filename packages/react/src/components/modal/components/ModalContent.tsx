import * as React from 'react';
import { Box } from '../../../layout';

export interface ModalContentProps {
  className?: string;
  style?: React.CSSProperties;
}

const ModalContent: React.FC<ModalContentProps> = ({ className, style, children }) => {
  return (
    <Box className={className} style={style} display="flex" flexDirection="column" flex="1 1 auto" px="lg" py="md">
      {children}
    </Box>
  );
};

ModalContent.displayName = 'ModalContent';

export default ModalContent;
