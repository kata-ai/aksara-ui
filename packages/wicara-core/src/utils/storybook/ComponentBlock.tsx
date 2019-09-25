import * as React from 'react';
import { Box, Text } from '../../foundations';

interface TypographyBlockProps {
  title: string;
}

export const ComponentBlock: React.FC<TypographyBlockProps> = ({ children, title }) => (
  <Box mb="lg">
    <Box>{children}</Box>
    <Box mt="sm">
      <Text scale="small" fontFamily="monospace" color="gray50" m={0}>
        {title}
      </Text>
    </Box>
  </Box>
);

ComponentBlock.displayName = 'ComponentBlock';
