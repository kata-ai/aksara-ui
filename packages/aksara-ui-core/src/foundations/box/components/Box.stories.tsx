import * as React from 'react';

import Box from './Box';

export default {
  title: 'Core/Foundations/Components/Box',
  component: Box,
};

export const BasicExample = () => <Box>I&apos;m inside a box!</Box>;

export const StyleProps = () => (
  <Box padding="sm" color="grey01" bg="blue06">
    I&apos;m inside a box!
  </Box>
);
