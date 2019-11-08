import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../../utils/storybook';
import Avatar from './Avatar';

const readme = require('../README.md');

const stories = storiesOf('Core|Components/Avatar', module).addDecorator(StorybookWrapper);

stories.add(
  'basic',
  () => (
    <StoryContainer>
      <StoryHeader title="Avatar" subtitle="Resizable avatar component." />
      <ComponentBlock title="Usage">
        <Avatar size={24} src="https://picsum.photos/400/400/?image=225" />{' '}
        <Avatar src="https://picsum.photos/600/400/?image=777" />
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);
