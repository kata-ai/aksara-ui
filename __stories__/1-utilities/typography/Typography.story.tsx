import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import RootWrapper from '@storybook-utils/components/Wrapper';
import { Typography, WicaraThemeProvider, Heading1 } from 'packages/styled/src';

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper>
    <WicaraThemeProvider>{storyFn()}</WicaraThemeProvider>
  </RootWrapper>
);

const story = storiesOf('Utilities|Typography', module).addDecorator(
  StoryWrapper
);

story.add('Typography', () => (
  <div>
    <Typography as="h1">h1. Heading</Typography>
    <Typography as="h2">h2. Heading</Typography>
    <Typography as="h3">h3. Heading</Typography>
    <Typography as="h4">h4. Heading</Typography>
    <Typography as="h5">h5. Heading</Typography>
    <Typography as="h6">h6. Heading</Typography>
  </div>
));

story.add('Text Colors', () => (
  <div>
    <Heading1 color="kata02">h1. Heading with kata02</Heading1>
  </div>
));
