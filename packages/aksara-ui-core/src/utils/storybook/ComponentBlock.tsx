import * as React from 'react';
import { Box, Heading, Stack } from '../../foundations';

interface ComponentBlockProps {
  title: string;
  withBackground?: boolean;
}

const ComponentBlock: React.FC<ComponentBlockProps> = ({ children, title, withBackground }) => (
  <Stack spacing="sm" mb="xl">
    <Heading color="grey07" scale={100} m={0}>
      {title}
    </Heading>
    <Box backgroundColor={withBackground ? 'grey02' : undefined} padding={withBackground ? 'md' : undefined}>
      {children}
    </Box>
  </Stack>
);

export default ComponentBlock;
