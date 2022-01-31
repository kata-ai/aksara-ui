import * as React from 'react';

import { Portal } from '@aksara-ui/helpers';
import { Box } from '../../layout';

export default {
  title: 'Core/Helpers/Portal',
  component: Portal,
};

export const Example = () => (
  <Portal>
    <Box position="fixed" bottom={0} right={0} padding="sm" color="grey01" bg="blue07">
      I&apos;m a box inside a portal!
    </Box>
  </Portal>
);

export const MultiplePortals = () => (
  <>
    <Portal>
      <Box position="fixed" bottom={0} left={0} padding="sm" color="grey01" bg="blue07">
        I&apos;m a box inside a portal!
      </Box>
    </Portal>
    <Portal>
      <Box position="fixed" bottom={0} right={0} padding="sm" color="grey01" bg="red07">
        I&apos;m a box inside a portal!
      </Box>
    </Portal>
  </>
);
