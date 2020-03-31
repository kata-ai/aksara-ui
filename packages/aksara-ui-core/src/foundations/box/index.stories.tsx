import * as React from 'react';

import { SystemWrapper } from '../../utils/storybook';
import { Box } from '.';

const readme = require('./README.md');

export default {
  title: 'Core|Foundations/Box',
  component: Box,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => <Box>I&apos;m inside a box!</Box>;

export const StyleProps = () => (
  <Box padding="sm" color="grey01" bg="blue06">
    I&apos;m inside a box!
  </Box>
);
