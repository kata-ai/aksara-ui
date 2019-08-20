import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../.storybook/components/Wrapper';

import Card from './Card';
import CardButton from './CardButton';

const readme = require('../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Card', module)
  .addDecorator(StoryWrapper)
  .add(
    'Documentation',
    () => (
      <Card title="Sample Card">Cards are used for UI elements with text.</Card>
    ),
    { notes: { markdown: readme } }
  )
  .add(
    'CardButton',
    () => (
      <Card asButton>
        <CardButton label="Add Content" icon="add" />
      </Card>
    ),
    { notes: { markdown: readme } }
  );
