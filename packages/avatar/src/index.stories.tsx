import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../.storybook/components/Wrapper';

import { Avatar } from '.';

import readme from '../README.md';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Avatar', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <div>
        <Avatar size={24} src="https://picsum.photos/400/400/?image=225" />{' '}
        <Avatar size={40} src="https://picsum.photos/600/400/?image=777" />
      </div>
    ),
    { notes: { markdown: readme } }
  );
