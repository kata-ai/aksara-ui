import * as React from 'react';

import { Box, Stack } from '../../../layout';
import { Text } from '../../../typography';
import VisuallyHidden from './VisuallyHidden';

export default {
  title: 'Core/Helpers/VisuallyHidden',
  component: VisuallyHidden,
};

export const Example = () => {
  return (
    <Stack spacing="md">
      <Text display="block">
        The button below has a hidden text &quot;Settings&quot; which is readable by screen reader.
      </Text>
      <Box>
        <button type="button">
          <span aria-hidden>⚙</span>
          <VisuallyHidden>Settings</VisuallyHidden>
        </button>
      </Box>
    </Stack>
  );
};
