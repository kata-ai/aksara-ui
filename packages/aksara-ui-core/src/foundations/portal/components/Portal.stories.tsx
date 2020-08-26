import * as React from 'react';

import { Box } from '../../box';
import Portal from './Portal';

export default {
  title: 'Core/Foundations/Portal',
  component: Portal,
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
