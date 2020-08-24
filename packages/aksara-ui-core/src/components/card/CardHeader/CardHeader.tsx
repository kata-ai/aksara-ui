import * as React from 'react';

import { Box, Heading, BoxProps } from '../../../foundations';

export interface CardHeaderProps extends BoxProps {
  className?: string;
  style?: React.CSSProperties;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, style, children, ...rest }) => {
  return (
    <Box className={className} style={style} display="flex" flexDirection="column" pt="lg" px="lg" pb="md" {...rest}>
      <Heading scale={500} m={0}>
        {children}
      </Heading>
    </Box>
  );
};

export default CardHeader;
