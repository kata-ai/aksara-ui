import * as React from 'react';
import { Box, Text } from '../../foundations';

interface ComponentBlockProps {
  title: string;
}

const ComponentBlock: React.FC<ComponentBlockProps> = ({ children, title }) => (
  <Box mb="lg">
    <Box>{children}</Box>
    <Box mt="sm">
      <Text fontFamily="monospace" color="grey06" scale={200} m={0}>
        {title}
      </Text>
    </Box>
  </Box>
);

export default ComponentBlock;
