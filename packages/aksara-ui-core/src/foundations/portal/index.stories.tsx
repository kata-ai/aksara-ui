import * as React from 'react';

import { SystemWrapper } from '../../utils/storybook';
import { Box } from '../box';
import Portal from './components/Portal';

const readme = require('./README.md');

export default {
  title: 'Core|Foundations/Portal',
  component: Portal,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const Example = () => (
  <Portal>
    <Box position="absolute" bottom={0} right={0} padding="sm" color="grey01" bg="blue06">
      I&apos;m a box inside a portal!
    </Box>
  </Portal>
);

export const MultiplePortals = () => (
  <>
    <Portal>
      <Box position="absolute" bottom={0} right={0} padding="sm" color="grey01" bg="blue06">
        I&apos;m a box inside a portal!
      </Box>
    </Portal>
    <Portal>
      <Box position="absolute" bottom={0} left={0} padding="sm" color="grey01" bg="red06">
        I&apos;m a box inside a portal!
      </Box>
    </Portal>
  </>
);
