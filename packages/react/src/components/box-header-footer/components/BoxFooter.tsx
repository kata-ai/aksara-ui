import * as React from 'react';
import { Box } from '../../../layout';

export interface BoxFooterProps {
  className?: string;
  style?: React.CSSProperties;
}

// TODO add variant size
// TODO useComponentStyles
const BoxFooter: React.FC<BoxFooterProps> = ({ className, style, children }) => {
  return (
    <Box className={className} style={style} p="lg">
      {children}
    </Box>
  );
};

export default BoxFooter;
