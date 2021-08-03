import * as React from 'react';

import { Box, BoxProps } from '../../../layout';

export interface CardFooterProps extends BoxProps {
  className?: string;
  style?: React.CSSProperties;
}

const CardFooter: React.FC<CardFooterProps> = ({ className, style, children, ...rest }) => {
  return (
    <Box className={className} style={style} pt="md" px="xl" pb="xl" {...rest}>
      {children}
    </Box>
  );
};

export default CardFooter;
