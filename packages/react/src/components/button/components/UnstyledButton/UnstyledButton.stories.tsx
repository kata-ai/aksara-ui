import * as React from 'react';

import { UnstyledButton } from '.';
import { Box } from '../../../../layout/box';

const readme = require('../../README.md');

export default {
  title: 'Core/Components/Button/UnstyledButton',
  component: UnstyledButton,
  parameters: {
    notes: { markdown: readme },
    jsx: { skip: 1 },
  },
};

export const Example = () => (
  <Box padding="sm">
    <button type="button">I&apos;m a button!</button>{' '}
    <UnstyledButton type="button">I&apos;m an unstyled button!</UnstyledButton>
  </Box>
);
