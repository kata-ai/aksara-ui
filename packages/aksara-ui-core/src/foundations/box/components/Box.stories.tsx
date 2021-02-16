import * as React from 'react';
import { Heading } from '../../typography';

import Box from './Box';

export default {
  title: 'Core/Layout/Box',
  component: Box,
};

export const BasicExample = () => <Box>I&apos;m inside a box!</Box>;

export const StyleProps = () => (
  <Box padding="sm" color="grey01" backgroundColor="blue06">
    I&apos;m inside a box!
  </Box>
);

export const PseudoProps = () => (
  <Box padding="sm" color="grey09" backgroundColor="grey01" _hover={{ backgroundColor: 'blue01' }}>
    Hover over me!
  </Box>
);

export const CustomProps = () => (
  <Box sx={{ '--heading-color': '#0070f3' }}>
    <Heading color="var(--heading-color)" scale={800}>
      This heading is styled using CSS variables!
    </Heading>
  </Box>
);
