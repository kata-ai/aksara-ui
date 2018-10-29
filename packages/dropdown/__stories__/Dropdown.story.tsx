import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';
import WithState from '../../../.storybook/components/WithState';

import DropdownSelector from '../src/DropdownSelector';
import DropdownItem from '../src/DropdownItem';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story: any = storiesOf('Components|Dropdown', module)
  .addDecorator(StoryWrapper)
  .addDecorator(
    wInfo({
      propTables: [DropdownSelector, DropdownItem]
    })
  );

const infoText = `
## Install

~~~sh
# yarn
yarn add @kata-kit/dropdown
# npm
npm install @kata-kit/dropdown
~~~

## Usage

~~~jsx
import { DropdownSelector, DropdownItem } from '@kata-kit/dropdown';

const Component = ({ onSelect, value }) => (
  <DropdownSelector onSelect={onSelect} value={value}>
    <DropdownItem>Hehe</DropdownItem>
    <DropdownItem>Hoho</DropdownItem>
  </DropdownSelector>
);
~~~
`;

story.add(
  'Documentation',
  () => (
    <WithState
      initialState={{
        values: ['Apple', 'Banana', 'Cherry'],
        selected: 'Apple'
      }}
    >
      {({ values, selected }, { setState }) => (
        <DropdownSelector
          value={selected}
          onSelect={value => setState({ selected: value })}
        >
          {values.map(v => (
            <DropdownItem key={v} value={v}>
              {v}
            </DropdownItem>
          ))}
        </DropdownSelector>
      )}
    </WithState>
  ),
  { info: { text: infoText } }
);
