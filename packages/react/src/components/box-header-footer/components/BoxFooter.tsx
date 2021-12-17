import * as React from 'react';
import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';

export interface BoxFooterProps extends BoxProps {
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg';
}

const BoxFooter: React.FC<BoxFooterProps> = ({ className, style, children, size = 'sm', sx, ...rest }) => {
  const boxFooterStyle = useComponentStyles('boxFooter', { size });
  return (
    <Box sx={{ ...boxFooterStyle, ...sx }} className={className} style={style} {...rest}>
      {children}
    </Box>
  );
};

export default BoxFooter;
