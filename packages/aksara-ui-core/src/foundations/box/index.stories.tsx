import * as React from 'react';

import { AksaraProvider } from '../reset';
import { Box } from '.';

const readme = require('./README.md');

export default {
  title: 'Core|Foundations/Box',
  component: Box,
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => (
  <AksaraProvider>
    <Box>I&apos;m inside a box!</Box>
  </AksaraProvider>
);

export const StyleProps = () => (
  <AksaraProvider>
    <Box padding="sm" color="grey01" bg="blue06">
      I&apos;m inside a box!
    </Box>
  </AksaraProvider>
);
