import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { AksaraProvider } from '../reset';
import { Box } from '.';

const readme = require('./README.md');

storiesOf('Core|Foundations/Box', module)
  .add(
    'default',
    () => (
      <AksaraProvider>
        <Box>I&apos;m inside a box!</Box>
      </AksaraProvider>
    ),
    {
      notes: { markdown: readme },
    }
  )
  .add(
    'with color/padding',
    () => (
      <AksaraProvider>
        <Box padding="sm" color="gray10" bg="kataBlue">
          I&apos;m inside a box!
        </Box>
      </AksaraProvider>
    ),
    {
      notes: { markdown: readme },
    }
  );
