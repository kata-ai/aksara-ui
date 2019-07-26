import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '@storybook-utils/components/Wrapper';

import { EmptyMessage } from '@kata-kit/common/src/components/EmptyMessage';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components|Common/EmptyMessage', module).addDecorator(
  StoryWrapper
);

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
