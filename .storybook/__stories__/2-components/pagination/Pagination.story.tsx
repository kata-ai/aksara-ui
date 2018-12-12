import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '@storybook-utils/utils/wInfo';
import Wrapper from '@storybook-utils/components/Wrapper';
import WithState from '@storybook-utils/components/WithState';

import Pagination from '@kata-kit/pagination/src/Pagination';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story: any = storiesOf('Components|Pagination', module)
  .addDecorator(StoryWrapper)
  .addDecorator(wInfo({ propTables: [Pagination] }));

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
  () => (
    <WithState initialState={{ current: 1, total: 5 }}>
      {({ current, total }, { setState }) => (
        <Pagination
          current={current}
          total={total}
          onSelect={select => setState({ current: select })}
        />
      )}
    </WithState>
  ),
  { info }
);

story.add(
  'Large page numbers',
  () => (
    <WithState initialState={{ current: 10, total: 50 }}>
      {({ current, total }, { setState }) => (
        <div>
          <h1>Large page numbers</h1>
          <p>
            Paginations will also automatically truncate itself in the most
            convenient manner when the number of pages get too large.
          </p>
          <Pagination
            current={current}
            total={total}
            onSelect={select => setState({ current: select })}
          />
        </div>
      )}
    </WithState>
  ),
  { info: { disable: true } }
);
