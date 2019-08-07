import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../../.storybook/components/Wrapper';

import { EmptyMessage } from './index';

const readme = require('../../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Common/EmptyMessage', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <EmptyMessage title="Nothing">
        Nothing to see here. Move along.
      </EmptyMessage>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  );
