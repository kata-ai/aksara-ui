import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { InputSelect, InputSelectProps } from '../components/InputSelect';
import { Box } from '../../../layout';

export default {
  title: 'Core/Components/Form/InputSelect',
  component: InputSelect,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    errors: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      options: ['md', 'lg'],
    },
    label: {
      control: 'text',
    },
    width: {
      control: 'number',
    },
  },
} as Meta<InputSelectProps<ValueSchema>>;

interface ValueSchema {
  label: string;
  value: string;
}

export const Example: Story<InputSelectProps<ValueSchema>> = ({
  placeholder,
  disabled,
  size,
  label,
  errors,
  width,
  maxHeight,
}) => {
  const [selected, setSelected] = React.useState<ValueSchema | null>(null);
  const [items] = React.useState([
    { label: 'ab', value: 'a' },
    { label: 'abc', value: 'b' },
    { label: 'bcd', value: 'c' },
    { label: 'cde', value: 'd' },
    { label: 'def', value: 'e' },
    { label: 'efg', value: 'f' },
    { label: 'fgh', value: 'g' },
    { label: 'ghi', value: 'h' },
    { label: 'hij', value: 'i' },
    { label: 'ijk', value: 'j' },
    { label: 'jkl', value: 'k' },
  ]);
  return (
    <InputSelect
      label={label}
      size={size}
      selectedItem={selected}
      placeholder={placeholder}
      openOnFocus
      disabled={disabled}
      errors={errors}
      itemToString={item => (item ? `${item.label}` : '')}
      itemValue={item => item?.value ?? ''}
      itemRenderer={item => (
        <>
          <Box width={15} mr="sm" />
          {`${item.label}`}
        </>
      )}
      handleSelectedItemChange={({ selectedItem }) => {
        if (selectedItem) {
          setSelected(selectedItem);
        }
      }}
      items={items}
      width={width}
      maxHeight={maxHeight}
    />
  );
};
Example.args = {
  placeholder: 'Select...',
  size: 'md',
  disabled: false,
  label: 'Label input',
  errors: false,
  width: '100%',
  maxHeight: '250px',
};

export const ListOfStringExample: Story<InputSelectProps<ValueSchema>> = ({
  placeholder,
  disabled,
  size,
  label,
  errors,
  width,
  maxHeight,
}) => {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [items] = React.useState([
    'apple',
    'apricot',
    'avocado',
    'banana',
    'bell pepper',
    'bilberry',
    'blackberry',
    'blackcurrant',
    'blood orange',
  ]);
  return (
    <InputSelect
      label={label}
      size={size}
      selectedItem={selected}
      placeholder={placeholder}
      openOnFocus
      disabled={disabled}
      errors={errors}
      handleSelectedItemChange={({ selectedItem }) => {
        if (selectedItem) {
          setSelected(selectedItem);
        }
      }}
      items={items}
      width={width}
      maxHeight={maxHeight}
    />
  );
};

ListOfStringExample.args = {
  ...Example.args,
};
