import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../utils/storybook';
import Circle from './components/Circle';

const readme = require('./README.md');

const story = storiesOf('Core|Components/Loading', module).addDecorator(StorybookWrapper);

story.add(
  'default',
  () => (
    <StoryContainer>
      <StoryHeader title="Loading" subtitle="Renders a spinner to indicate loading state" />
      <ComponentBlock title="Circle">
        <Circle />
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);
