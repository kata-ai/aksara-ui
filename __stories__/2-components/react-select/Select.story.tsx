import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '@storybook-utils/utils/wInfo';
import Wrapper from '@storybook-utils/components/Wrapper';
import WithState from '@storybook-utils/components/WithState';

import FormGroup from '@kata-kit/form/src/components/FormGroup';
import FormLabel from '@kata-kit/form/src/components/FormLabel';
import InputText from '@kata-kit/form/src/components/InputText';
import SelectCreatable from '@kata-kit/react-select/src/components/SelectCreatable';
import SelectBase from '@kata-kit/react-select/src/components/SelectBase';
import SelectAsync from '@kata-kit/react-select/src/components/SelectAsync';
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

const createOption = (label: string) => ({
  label,
  value: label
});

const components = {
  DropdownIndicator: null
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

~~~sh
# yarn
yarn add @kata-kit/react-select
# npm
npm install @kata-kit/react-select
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
          <pre>
            <code>{JSON.stringify(selected, null, 2)}</code>
          </pre>
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
          <pre>
            <code>{JSON.stringify(selected, null, 2)}</code>
          </pre>
        </div>
      )}
    </WithState>
  ),
  {
    info: { disable: true }
  }
);

// tslint:disable:no-console
const handleChange = (newValue: any, actionMeta: any) => {
  console.group('Value Changed');
  console.log(newValue);
  console.log(`action: ${actionMeta.action}`);
  console.groupEnd();
};

const handleInputChange = (inputValue: any, actionMeta: any) => {
  console.group('Input Changed');
  console.log(inputValue);
  console.log(`action: ${actionMeta.action}`);
  console.groupEnd();
};
// tslint:enable:no-console

story.add(
  'Creatable Select',
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
            <FormLabel>Creatable Select</FormLabel>
            <SelectCreatable
              isClearable
              options={options}
              onChange={(value, actionMeta) => {
                handleChange(value, actionMeta);
                setState({ selected: value });
              }}
              onInputChange={(value, actionMeta) => {
                handleInputChange(value, actionMeta);
                setState({ inputValue: value });
              }}
            />
          </FormGroup>
          <pre>
            <code>{JSON.stringify(selected, null, 2)}</code>
          </pre>
        </div>
      )}
    </WithState>
  ),
  {
    info: { disable: true }
  }
);

story.add(
  'Tags Input',
  () => (
    <WithState<{
      selected?: ValueType<{ label: string; value: string }>;
      inputValue?: string;
    }>
      initialState={{ selected: [], inputValue: '' }}
    >
      {({ selected, inputValue }, { setState }) => (
        <div>
          <FormGroup>
            <FormLabel>Tags Input</FormLabel>
            <SelectCreatable
              isClearable
              isMulti
              value={selected}
              inputValue={inputValue}
              menuIsOpen={false}
              placeholder="Type something and press enter..."
              onChange={(value, actionMeta) => {
                // tslint:disable:no-console
                console.group('Value Changed');
                console.log(value);
                console.log(`action: ${actionMeta.action}`);
                console.groupEnd();
                setState({ selected: value });
              }}
              onInputChange={value => {
                setState({ inputValue: value });
              }}
              onKeyDown={event => {
                console.log('onKeyDown');
                if (!inputValue) {
                  return;
                }

                // tslint:disable:switch-default
                switch (event.key) {
                  case 'Enter':
                  case 'Tab':
                  case ',':
                    setState({
                      inputValue: '',
                      // @ts-ignore - value type can be of any type other than array, thus
                      // requires `--downlevelIteration`.
                      selected: [...selected, createOption(inputValue)]
                    });
                    event.preventDefault();
                }
                // tslint:enable:switch-default
              }}
              components={components}
            />
          </FormGroup>
          <pre>
            <code>{JSON.stringify(selected, null, 2)}</code>
          </pre>
        </div>
      )}
    </WithState>
  ),
  {
    info: { disable: true }
  }
);
