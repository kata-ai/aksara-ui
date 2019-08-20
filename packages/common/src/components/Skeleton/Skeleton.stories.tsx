import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../../.storybook/components/Wrapper';

import { Skeleton } from './index';
import { Board } from '../Board';

const readme = require('../../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Common/Skeleton', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <Board headingChildren={<Skeleton />}>
        <Skeleton numberOfLines={3} />
      </Board>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  );
