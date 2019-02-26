import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '@storybook-utils/utils/wInfo';
import Wrapper from '@storybook-utils/components/Wrapper';

import { Skeleton } from '@kata-kit/common/src/components/Skeleton';
import { Board } from '@kata-kit/common/src/components/Board';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components|Common/Skeleton', module).addDecorator(
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

Basic:

~~~jsx
import { Skeleton } from '@kata-kit/common';

<Skeleton />
~~~

Multiple lines:

~~~jsx
import { Skeleton } from '@kata-kit/common';

<Skeleton numberOfLines={3} />
~~~
`;

story
  .addDecorator(
    wInfo({ propTables: [Skeleton], propTablesExclude: [Board, Wrapper] })
  )
  .add(
    'Documentation',
    () => (
      <Board headingChildren={<Skeleton />}>
        <Skeleton numberOfLines={3} />
      </Board>
    ),
    { info }
  );
