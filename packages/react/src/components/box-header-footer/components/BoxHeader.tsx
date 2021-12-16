import * as React from 'react';
import { Box, BoxProps } from '../../../layout';

export interface BoxHeaderProps extends BoxProps {
  className?: string;
  style?: React.CSSProperties;
}

// TODO add variant size
// TODO useComponentStyles
const BoxHeader: React.FC<BoxHeaderProps> = ({ className, style, children, ...rest }) => {
  return (
    <Box className={className} style={style} display="flex" flexDirection="column" p="lg" {...rest}>
      {children}
    </Box>
  );
};

export default BoxHeader;
