import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../../utils/storybook';
import Badge from './Badge';

const readme = require('../README.md');

const stories = storiesOf('Core|Components/Badge', module).addDecorator(StorybookWrapper);

stories.add(
  'basic',
  () => (
    <StoryContainer>
      <StoryHeader title="Badge" subtitle="Badge text for entity, status, etc." />
      <ComponentBlock title="Usage">
        <Badge>entity</Badge> <Badge variant="primary">primary</Badge>{' '}
        <Badge variant="secondary">secondary</Badge> <Badge variant="success">success</Badge>{' '}
        <Badge variant="warning">warning</Badge> <Badge variant="danger">danger</Badge>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);
