import * as React from 'react';
import { Box, BoxProps } from '../../../layout';

export interface DialogHeaderProps extends BoxProps {
  className?: string;
  style?: React.CSSProperties;
}

const ModalHeader: React.FC<DialogHeaderProps> = ({ className, style, children, ...rest }) => {
  return (
    <Box className={className} style={style} display="flex" flexDirection="column" p="lg" {...rest}>
      {children}
    </Box>
  );
};

ModalHeader.displayName = 'ModalHeader';

/** @deprecated - use `ModalHeader` instead */
export const DialogHeader = ModalHeader;

export default ModalHeader;
