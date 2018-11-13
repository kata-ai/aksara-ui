import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';
import WithState from '../../../.storybook/components/WithState';

import FormGroup from '../../form/src/components/FormGroup';
import FormLabel from '../../form/src/components/FormLabel';
import InputText from '../../form/src/components/InputText';
import SelectBase from '../src/components/SelectBase';
import SelectAsync from '../src/components/SelectAsync';
import { ValueType } from 'react-select/lib/types';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const asyncOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' }
];

const filterColors = (inputValue: string) =>
  asyncOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

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

This package is a wrapper over \`react-select\` v2. You will need to install \`react-select\` alongside this package.

~~~sh
# yarn
yarn add @kata-kit/react-select react-select
# npm
npm install @kata-kit/react-select react-select
~~~

## Usage

~~~jsx
import { SelectBase } from '@kata-kit/react-select';
import options from './options';

const Component = ({ children }) => (
  <SelectBase options={options} isClearable />
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
            Selected: <code>{JSON.stringify(selected)}</code>
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

story.add(
  'Async Select',
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
            <FormLabel>Async Select</FormLabel>
            <SelectAsync
              isLoading
              cacheOptions
              defaultOptions
              loadOptions={loadOptions}
              value={selected}
              inputValue={inputValue}
              onChange={value => setState({ selected: value })}
              onInputChange={value => setState({ inputValue: value })}
            />
          </FormGroup>
          <p>
            Selected: <code>{JSON.stringify(selected)}</code>
          </p>
        </div>
      )}
    </WithState>
  ),
  {
    info: { disable: true }
  }
);
