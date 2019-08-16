import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../.storybook/components/Wrapper';
import WithState from '../../../.storybook/components/WithState';

import Pagination from './Pagination';

const readme = require('../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Pagination', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
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
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    'large page numbers',
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
    {
      notes: {
        markdown: readme
      }
    }
  );
