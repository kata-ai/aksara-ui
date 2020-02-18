import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Box } from '../box';
import { StorybookWrapper } from '../../utils/storybook';
import Portal from './components/Portal';

const readme = require('./README.md');

storiesOf('Core|Foundations/Portal', module)
  .addDecorator(StorybookWrapper)
  .add(
    'default',
    () => (
      <Portal>
        <Box position="absolute" bottom={0} right={0} padding="sm" color="gray10" bg="kataBlue">
          I&apos;m a box inside a portal!
        </Box>
      </Portal>
    ),
    {
      notes: { markdown: readme },
    }
  )
  .add(
    'multiple portals',
    () => (
      <>
        <Portal>
          <Box position="absolute" bottom={0} right={0} padding="sm" color="gray10" bg="kataBlue">
            I&apos;m a box inside a portal!
          </Box>
        </Portal>
        <Portal>
          <Box position="absolute" bottom={0} left={0} padding="sm" color="gray10" bg="red">
            I&apos;m a box inside a portal!
          </Box>
        </Portal>
      </>
    ),
    {
      notes: { markdown: readme },
    }
  );
