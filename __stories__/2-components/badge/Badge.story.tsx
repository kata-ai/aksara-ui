import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '@storybook-utils/utils/wInfo';
import Wrapper from '@storybook-utils/components/Wrapper';

import Badge from '@kata-kit/badge/src/components/Badge';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story: any = storiesOf('Components|Badge', module)
  .addDecorator(StoryWrapper)
  .addDecorator(wInfo({ propTables: [Badge] }));

const info = `
## Install

~~~sh
# yarn
yarn add @kata-kit/badge
# npm
npm install @kata-kit/badge
~~~

## Usage

~~~jsx
import { Badge } from '@kata-kit/badge';

<Badge color="default" message="text" />
~~~
`;

story.add(
  'Documentation',
  () => (
    <div>
      <Badge>entity</Badge> <Badge color="primary">primary</Badge>{' '}
      <Badge color="secondary">secondary</Badge>{' '}
      <Badge color="success">success</Badge>{' '}
      <Badge color="warning">warning</Badge>{' '}
      <Badge color="danger">danger</Badge>{' '}
    </div>
  ),
  { info }
);
