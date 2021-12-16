import * as React from 'react';
import { Box, BoxProps } from '../../../layout';

export interface ModalHeaderProps extends BoxProps {
  className?: string;
  style?: React.CSSProperties;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ className, style, children, ...rest }) => {
  return (
    <Box className={className} style={style} display="flex" flexDirection="column" p="lg" {...rest}>
      {children}
    </Box>
  );
};

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
