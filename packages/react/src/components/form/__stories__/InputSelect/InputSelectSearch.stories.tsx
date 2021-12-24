import { Story } from '@storybook/react';
import * as React from 'react';
import { InputSelectSearch, InputSelectSearchProps } from '../../components/InputSelect';

export default {
  title: 'Core/Components/Form/InputSelect/InputSelectSearch',
  component: InputSelectSearch,
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
};
interface ValueSchema {
  label: string;
  value: string;
}
export const Example: Story<InputSelectSearchProps<ValueSchema>> = ({
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
    <InputSelectSearch
      label={label}
      size={size}
      selectedItem={selected}
      placeholder={placeholder}
      openOnFocus
      disabled={disabled}
      errors={errors}
      itemToString={item => (item ? `${item.label}` : '')}
      itemValue={item => item?.value ?? ''}
      itemRenderer={item => item.label}
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

export const ListOfStringExample: Story<InputSelectSearchProps<ValueSchema>> = ({
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
    <InputSelectSearch
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
