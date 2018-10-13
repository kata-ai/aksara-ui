import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withState } from '@dump247/storybook-state';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';

import Pagination from '../src/Pagination';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components/Pagination', module).addDecorator(
  StoryWrapper
);

const info = `
## Install

~~~sh
# yarn
yarn add @kata-kit/pagination
# npm
npm install @kata-kit/pagination
~~~

## Usage

~~~jsx
<Pagination
  current={3}
  total={50}
  onSelect={select => console.log('selected', select)}
/>
~~~
`;

story.add(
  'Basic',
  wInfo(info, { propTables: [Pagination] })(
    withState({ current: 1, total: 5 })(({ store }) => (
      <Pagination
        {...store.state}
        onSelect={select => store.set({ current: select })}
      />
    ))
  )
);

story.add(
  'Large page numbers',
  withState({ current: 10, total: 50 })(({ store }) => (
    <div>
      <h1>Large page numbers</h1>
      <p>
        Paginations will also automatically truncate itself in the most
        convenient manner when the number of pages get too large.
      </p>
      <Pagination
        {...store.state}
        onSelect={select => store.set({ current: select })}
      />
    </div>
  ))
);
