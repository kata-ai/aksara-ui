import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';
import WithState from '../../../.storybook/components/WithState';

import FormGroup from '../../form/src/components/FormGroup';
import FormLabel from '../../form/src/components/FormLabel';
import InputText from '../../form/src/components/InputText';
import SelectBase from '../src/components/SelectBase';
import { ValueType } from 'react-select/lib/types';
import { isArray } from 'lodash-es';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story: any = storiesOf('Components|React Select', module)
  .addDecorator(StoryWrapper)
  .addDecorator(
    wInfo({
      propTables: []
    })
  );

const infoText = `
## Install

This is a wrapper over \`react-select\` v2. You will need to install \`react-select\` alongside this package.

~~~sh
# yarn
yarn add @kata-kit/react-select react-select
# npm
npm install @kata-kit/react-select react-select
~~~

## Usage

~~~jsx
import { BaseSelect } from '@kata-kit/react-select';

const Component = ({ children }) => (
  <InputText name="username" placeholder="Username" />
);
~~~
`;

story.add(
  'Documentation',
  () => (
    <WithState<{ selected: any; inputValue: any }>
      initialState={{ selected: undefined, inputValue: undefined }}
    >
      {({ selected, inputValue }, { setState }) => (
        <SelectBase
          value={selected}
          inputValue={inputValue}
          onChange={value => setState({ selected: value })}
          onInputChange={value => setState({ inputValue: value })}
          options={options}
        />
      )}
    </WithState>
  ),
  {
    info: { text: infoText }
  }
);

story.add(
  'Basic Example',
  () => (
    <WithState<{
      selected?: ValueType<{ label: string; value: string }>;
      inputValue?: string;
    }>
      initialState={{ selected: undefined, inputValue: undefined }}
    >
      {({ selected, inputValue }, { setState }) => (
        <div>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <InputText />
          </FormGroup>
          <FormGroup>
            <FormLabel>Favourite ice cream flavour</FormLabel>
            <SelectBase
              value={selected}
              inputValue={inputValue}
              onChange={value => setState({ selected: value })}
              onInputChange={value => setState({ inputValue: value })}
              options={options}
              isClearable
            />
          </FormGroup>
          <p>
            Selected:{' '}
            <code>
              {selected && !isArray(selected) ? selected.value : 'N/A'}
            </code>
          </p>
        </div>
      )}
    </WithState>
  ),
  {
    info: { disable: true }
  }
);

story.add(
  'Disabled Select',
  () => (
    <FormGroup>
      <FormLabel>Disabled Select</FormLabel>
      <SelectBase isDisabled options={options} />
    </FormGroup>
  ),
  {
    info: { disable: true }
  }
);

story.add(
  'With Loading',
  () => (
    <FormGroup>
      <FormLabel>Loading Select</FormLabel>
      <SelectBase isLoading />
    </FormGroup>
  ),
  {
    info: { disable: true }
  }
);
