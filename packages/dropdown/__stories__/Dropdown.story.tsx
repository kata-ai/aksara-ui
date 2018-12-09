import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';
import WithState from '../../../.storybook/components/WithState';

import DropdownSelector from '../src/components/DropdownSelector';
import DropdownItem from '../src/components/DropdownItem';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story: any = storiesOf('Components|Dropdown', module)
  .addDecorator(StoryWrapper)
  .addDecorator(
    wInfo({
      propTables: [DropdownSelector, DropdownItem]
    })
  )
  .addDecorator(withKnobs);

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

const dropdownPositionOptions = {
  Down: 'down',
  Right: 'right',
  Up: 'up',
  Left: 'left'
};

story.add(
  'Documentation',
  () => (
    <WithState
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
  { info: { text: infoText } }
);
