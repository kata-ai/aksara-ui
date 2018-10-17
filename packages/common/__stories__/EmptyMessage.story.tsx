import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';

import EmptyMessage from '../src/EmptyMessage';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story: any = storiesOf('Components|Common/EmptyMessage', module)
  .addDecorator(StoryWrapper)
  .addDecorator(wInfo());

const info = `
## Install

~~~sh
# yarn
yarn add @kata-kit/common
# npm
npm install @kata-kit/common
~~~

## Usage

~~~jsx
import { EmptyMessage } from '@kata-kit/common';
~~~
`;

story.add(
  'Documentation',
  () => (
    <EmptyMessage title="Nothing">
      Nothing to see here. Move along.
    </EmptyMessage>
  ),
  { info }
);
