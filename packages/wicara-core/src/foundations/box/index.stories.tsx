import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { WicaraProvider } from '../reset';
import { Box } from '.';

const readme = require('./README.md');

storiesOf('Core|Foundations/Box', module)
  .add(
    'default',
    () => (
      <WicaraProvider>
        <Box>I'm inside a box!</Box>
      </WicaraProvider>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'with color/padding',
    () => (
      <WicaraProvider>
        <Box padding="sm" color="gray10" bg="kataBlue">
          I'm inside a box!
        </Box>
      </WicaraProvider>
    ),
    {
      notes: { markdown: readme }
    }
  );
