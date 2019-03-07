import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import RootWrapper from '@storybook-utils/components/Wrapper';
import { Box, Text, WicaraThemeProvider } from 'packages/styled/src';

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper>
    <WicaraThemeProvider>{storyFn()}</WicaraThemeProvider>
  </RootWrapper>
);

const story = storiesOf('Utilities|Box', module).addDecorator(StoryWrapper);

story.add('Basic', () => (
  <Box>
    <Text>I'm inside a box!</Text>
  </Box>
));

story.add('With Paddings', () => (
  <Box bg="kata02" p={8}>
    <Text color="white">I'm inside a box woth background and padding!</Text>
  </Box>
));
