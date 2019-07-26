import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../.storybook/components/Wrapper';

import Badge from './Badge';

const readme = require('../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Badge', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <>
        <Badge>entity</Badge> <Badge color="primary">primary</Badge>{' '}
        <Badge color="secondary">secondary</Badge>{' '}
        <Badge color="success">success</Badge>{' '}
        <Badge color="warning">warning</Badge>{' '}
        <Badge color="danger">danger</Badge>{' '}
      </>
    ),
    { notes: { markdown: readme } }
  );
