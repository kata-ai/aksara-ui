import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import RootWrapper from '@storybook-utils/components/Wrapper';
import {
  Text,
  WicaraThemeProvider,
  Heading1,
  Paragraph
} from 'packages/styled/src';

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper>
    <WicaraThemeProvider>{storyFn()}</WicaraThemeProvider>
  </RootWrapper>
);

const story = storiesOf('Utilities|Typography', module).addDecorator(
  StoryWrapper
);

story.add('Text', () => (
  <div>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quam nostrum
      veritatis delectus harum accusantium commodi in itaque illo, vitae ratione
      deleniti dolores necessitatibus temporibus dolorem doloribus aperiam aut
      esse?
    </Text>
  </div>
));

story.add('Headings', () => (
  <div>
    <Text as="h1">h1. Heading</Text>
    <Text as="h2">h2. Heading</Text>
    <Text as="h3">h3. Heading</Text>
    <Text as="h4">h4. Heading</Text>
    <Text as="h5">h5. Heading</Text>
    <Text as="h6">h6. Heading</Text>
  </div>
));

story.add('Paragraph', () => (
  <div>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quam nostrum
      veritatis delectus harum accusantium commodi in itaque illo, vitae ratione
      deleniti dolores necessitatibus temporibus dolorem doloribus aperiam aut
      esse?
    </Paragraph>
  </div>
));

story.add('Text Colors', () => (
  <div>
    <Heading1 color="kata02">h1. Heading with kata02</Heading1>
    <Text color="red">Text with red</Text>
  </div>
));
