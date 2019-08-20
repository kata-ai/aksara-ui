import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../.storybook/components/Wrapper';
import WithState from '../../../../.storybook/components/WithState';

import DropdownSelector from './DropdownSelector';
import DropdownItem from './DropdownItem';

const readme = require('../../README.md');

type DropdownStoryState = {
  values: string[];
  selected?: string;
};

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Dropdown', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <WithState<DropdownStoryState>
        initialState={{
          values: ['Apple', 'Banana', 'Cherry'],
          selected: undefined
        }}
      >
        {({ values, selected }, { setState }) => (
          <div style={{ width: 250 }}>
            <DropdownSelector
              value={selected}
              block
              onSelect={value => setState({ selected: value })}
            >
              {values.map(v => (
                <DropdownItem key={v} value={v}>
                  {v}
                </DropdownItem>
              ))}
            </DropdownSelector>
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
