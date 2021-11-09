import * as React from 'react';
import { Box, Stack, StackProps } from '../../layout';
import { Heading } from '../../typography';

interface ComponentBlockProps extends Omit<StackProps, 'spacing'> {
  title: string;
  withBackground?: boolean;
}

const ComponentBlock: React.FC<ComponentBlockProps> = ({ children, title, withBackground, ...rest }) => (
  <Stack spacing="sm" {...rest}>
    <Heading color="grey07" scale={100} m={0}>
      {title}
    </Heading>
    <Box backgroundColor={withBackground ? 'grey02' : undefined} padding={withBackground ? 'md' : undefined}>
      {children}
    </Box>
  </Stack>
);

export default ComponentBlock;
