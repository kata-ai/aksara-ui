import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { WicaraReset } from '../reset';
import { Box } from '../box';

const readme = require('./README.md');

storiesOf('Core|Foundations/Box', module)
  .add(
    'default',
    () => (
      <WicaraReset>
        <Box>I'm inside a box!</Box>
      </WicaraReset>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'with color/padding',
    () => (
      <WicaraReset>
        <Box padding="sm" color="gray10" bg="kataBlue">
          I'm inside a box!
        </Box>
      </WicaraReset>
    ),
    {
      notes: { markdown: readme }
    }
  );
